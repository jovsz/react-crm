import {
  Show,
  useShow,
  Typography,
  Tag,
  useOne,
  IResourceComponentsProps,
  MarkdownField,
} from "@pankod/refine";

import { IUser } from "interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  
  // const { data: categoryData } = useOne<ICategory>({
  //   resource: "categories",
  //   id: record?.category.id ?? "",
  //   queryOptions: {
  //     enabled: !!record?.category.id,
  //   },
  // });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>username</Title>
      <Text>{record?.username}</Text>

      <Title level={5}>email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Full Name</Title>
      <Text>{record?.firstName} {record?.lastName}</Text>

      <Title level={5}>Company</Title>
      <Text>{record?.company}</Text>

      <Title level={5}>phone</Title>
      <Text>{record?.phone}</Text>
      
    </Show>
  );
};
