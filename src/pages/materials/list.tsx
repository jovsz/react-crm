import {
  List,
  Table,
  TextField,
  useTable,
  IResourceComponentsProps,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useMany,
  useSelect,
  TagField,
  ImageField,
  FilterDropdownProps,
  Select,
  ShowButton,
  BooleanField,
  Radio,
  FilterDropdown,
  getDefaultFilter,
  Icons,
  getValueFromEvent,
  Input,
} from "@pankod/refine";
import {  IMaterial } from "interfaces";



export const MaterialList: React.FC<IResourceComponentsProps> = () => {
  const { CloseCircleOutlined, CheckCircleOutlined } = Icons;
  
  const { tableProps, sorter, filters  } = useTable<IMaterial>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
    initialFilter: [
      {
          field: "status",
          operator: "eq",
          value: 'name',
      },
      
  ],syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column<IMaterial>
                    title="metadata"
                    dataIndex="metadata"
                    render={(_, record) => (
                        <ImageField
                            value={record.metadata ? `http://localhost:8000/api/v1/material/${record.type}/${record.name.trim()}_${record.id_brand}_${record.metadata.color_code.trim()}_BaseColor.jpeg` : ''}
                            title={record.metadata ? record.metadata.Fabric : ''}
                            width={200}
                            
                            height={200}
                        />
                    )}
                />
        {/* <Table.Column
          dataIndex="img_photo"
          key="img_photo"
          title="Picture"
          render={(value) => <TextField value={value.name} />}
          defaultSortOrder={getDefaultSortOrder("img_photo", sorter)}
          sorter
        /> */}
        <Table.Column
          dataIndex="type"
          key="type"
          title="Type"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("type", sorter)}
          sorter
          filterDropdown={(props: FilterDropdownProps) => (
            <FilterDropdown
                {...props}
                mapValue={(selectedKeys) =>
                    selectedKeys.map((i) => parseInt(i.toString()))
                }
            >
               
            </FilterDropdown>
        )}
          defaultFilteredValue={getDefaultFilter("type", filters)}

        />
        <Table.Column
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
          filterDropdown={(props: FilterDropdownProps) => (
            <FilterDropdown {...props}>
                <Input />
            </FilterDropdown>
        )}
        />
        <Table.Column
          dataIndex="id_brand"
          key="id_brand"
          title="ID Brand"
          render={(value) =>  <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id_brand", sorter)}
          sorter
          filterDropdown={(props: FilterDropdownProps) => (
            <FilterDropdown {...props}>
                <Input />
            </FilterDropdown>
          )}
        />
        
        <Table.Column
                    dataIndex="status"
                    title="Status"
                    render={(value) => (
                        <BooleanField
                            value={value === "published"}
                            trueIcon={<CheckCircleOutlined />}
                            falseIcon={<CloseCircleOutlined />}
                        />
                    )}
                    filterDropdown={(props: FilterDropdownProps) => (
                      <FilterDropdown {...props}>
                          <Radio value="true">true</Radio>
                          <Radio value="false">false</Radio>
                      </FilterDropdown>
                  )}
                />
        <Table.Column
          dataIndex="createdAt"
          key="createdAt"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
          sorter
          
        />
      
          
      
        <Table.Column<IMaterial>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
