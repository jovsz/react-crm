import { AuthProvider, Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";

import "styles/antd.less";
import simpleRestDataProvider from "@pankod/refine-simple-rest";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { UserList, UserCreate, UserShow, UserEdit } from './pages/users';
import { MaterialList, MaterialShow} from './pages/materials'
import axios from 'axios';
// import AuthProvider from './auth-provider';


function App() {

  const authProvider: AuthProvider = {
    
    login:async (params: any) => {
        await axios.post(`http://localhost:8000/api/v1/auth/login`,{
          "username": params.username,
          "password": params.password,
        }).then(async res => {
          console.log(res.data)
          if(res.status === 201 && res.data.data.rol === 'admin'){
            localStorage.setItem('jwt', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            return Promise.resolve();
          }

        })
        return Promise.reject();
    },
    logout: () => {
      localStorage.removeItem("jwt");
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async() =>
      await localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(["admin"]),
    getUserIdentity:async  () => {
      const token = await localStorage.jwt
    axios.get('http://localhost:8000/api/v1/auth/profile',{
      headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        return Promise.resolve({
          id: res.data.id,
          name: res.data.username,
          avatar: res.data.img_photo ? res.data.img_photo[0].response.url : '' 
        });  
      })
      
    }
  }
      
    
      
    
      
  
  const API_URL = "http://localhost:8000/api/v1";
  const dataProvider = simpleRestDataProvider(API_URL);
  return (
    <Refine
      authProvider={authProvider}
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      resources={[
        // {
        //   name: "posts",
        //   list: PostList,
        //   create: PostCreate,
        //   edit: PostEdit,
        //   show: PostShow,
        // },
        {
          name: "user",
          list: UserList,
          create: UserCreate,
          edit: UserEdit,
           show: UserShow,
        },
        {
          name: 'material',
          list: MaterialList,
          show: MaterialShow,
        }
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    ></Refine>
  );
}

export default App;
