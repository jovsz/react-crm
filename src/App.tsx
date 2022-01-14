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
import { MaterialList, MaterialShow, MaterialEdit} from './pages/materials'
import { ConfigurationCreate, ConfigurationList, ConfigurationShow, ConfigurationEdit } from './pages/configuration';
import {authProvider } from './utility/auth-provider';



function App() {

  const API_URL = 'http://localhost:8000/api/v1';
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
          edit: MaterialEdit
        },
        {
          name: 'configuration',
          list: ConfigurationList,
          show: ConfigurationShow,
          create: ConfigurationCreate,
          edit: ConfigurationEdit
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
