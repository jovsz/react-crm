import { Refine } from "@pankod/refine";
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
import { UserList, UserCreate, UserShow } from './pages/users';

function App() {
  const API_URL = "http://localhost:8000/api/v1";
  const dataProvider = simpleRestDataProvider(API_URL);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
        {
          name: "user",
          list: UserList,
          create: UserCreate,
          // edit: PostEdit,
           show: UserShow,
        },
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
