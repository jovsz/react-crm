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

import { IMaterial } from "interfaces";

const { Title, Text } = Typography;

export const MaterialShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IMaterial>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Picture</Title>
      <ImageField
        value={record?.metadata ? `http://localhost:8000/api/v1/material/${record?.type}/${record?.name}_${record?.id_brand}_${record?.metadata.color_code.split(' ').pop()}_BaseColor.jpeg` : ''}
        title={record?.name}
        width={200}
      />

      <Title level={5}>Type</Title>
      <Text>{record?.type}</Text>

      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Brand</Title>
      <Text>{record?.brand}</Text>

      <Title level={5}>Status</Title>
      <Text>{record?.status}</Text>      
    </Show>
  );
};
