import {
  Show,
  useShow,
  Typography,
  Tag,
  useOne,
  IResourceComponentsProps,
  MarkdownField,
  Table,
  ImageField,
} from "@pankod/refine";

import { IUser } from "interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Picture</Title>
      <ImageField
        value={record?.img_photo[0].response.url}
        title={record?.img_photo[0].name}
        width={200}
      />

      <Title level={5}>username</Title>
      <Text>{record?.username}</Text>

      <Title level={5}>email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Full Name</Title>
      <Text>{record?.firstName} {record?.lastName}</Text>

      <Title level={5}>Company</Title>
      <Text>{record?.company}</Text>

      <Title level={5}>Phone</Title>
      <Text>{record?.phone}</Text>

      <Title level={5}>Rol</Title>
      <Text>{record?.rol}</Text>
      
    </Show>
  );
};
