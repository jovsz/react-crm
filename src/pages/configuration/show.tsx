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
  DateField,
} from "@pankod/refine";

import { IConfiguration, IUser } from "interfaces";

const { Title, Text } = Typography;

export const ConfigurationShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IConfiguration>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData } = useOne<IUser>({
    resource: "user",
    id: record?.user_id.id ?? "",
    queryOptions: {
      enabled: !!record?.user_id.id,
    },
  });

  

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Picture</Title>
      {/* <ImageField
        value={record?.metadata ? `http://localhost:8000/api/v1/material/${record?.type}/${record?.name}_${record?.id_brand}_${record?.metadata.color_code.split(' ').pop()}_BaseColor.jpeg` : ''}
        title={record?.name}
        width={200}
      /> */}

      <Title level={5}>name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>note</Title>
      <Text>{record?.note}</Text>

      <Title level={5}>Total Price</Title>
      <Text>{record?.total_price}</Text>

      <Title level={5}>Created By</Title>
      <Text>{categoryData?.data.username}</Text>

      <Title level={5}>Create At</Title>
      <Text ><DateField value={categoryData?.data.createdAt} format="LLL" /></Text>

      <Title level={5}>Preset</Title>
      <Text>{record?.preset}</Text>

      <Title level={5}>Status</Title>
      <Text>{record?.status}</Text>      
    </Show>
  );
};
