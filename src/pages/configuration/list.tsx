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
import { IConfiguration, IUser } from "interfaces";



export const ConfigurationList: React.FC<IResourceComponentsProps> = () => {
  const { CloseCircleOutlined, CheckCircleOutlined } = Icons;

  const { tableProps, sorter, filters } = useTable<IConfiguration>({
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

    ], syncWithLocation: true,

  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.user_id.id) ?? [];
  const { data: usersData, isLoading } = useMany<IUser>({
    resource: "user",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  const { selectProps: categorySelectProps } = useSelect<IUser>({
    resource: "user",
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
        <Table.Column<IConfiguration>
                    title="img_photo"
                    dataIndex="img_photo"
                    render={(_, record) => (
                        <ImageField
                            //@ts-ignore
                            value={record.img_photo ? record.img_photo[0].response[0].url : ''}
                            title={record.img_photo ? record.img_photo[0].name : ''}
                            width={200}
                            
                            height={200}
                        />
                    )}
                />
        

         <Table.Column
          dataIndex="preset"
          title="Preset"
          render={(value) => (
            <BooleanField
              value={value === true}
              trueIcon={<CheckCircleOutlined />}
              falseIcon={<CloseCircleOutlined />}
              valueLabelTrue="Preset configuration"
              valueLabelFalse="user Configuration"
            />
          )}
        />

        <Table.Column
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
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
          defaultFilteredValue={getDefaultFilter("name", filters)}

        />
        <Table.Column
          dataIndex="note"
          key="note"
          title="Note"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("note", sorter)}
          sorter
          filterDropdown={(props: FilterDropdownProps) => (
            <FilterDropdown {...props}>
              <Input />
            </FilterDropdown>
          )}
        />

        <Table.Column
          dataIndex="total_price"
          title="Total Price"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("total_price", sorter)}
          sorter
          filterDropdown={(props: FilterDropdownProps) => (
            <FilterDropdown {...props}>
              <Input />
            </FilterDropdown>
          )}
        />


        <Table.Column
          dataIndex={["user_id", "username"]}
          title="Created By"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={
                  usersData?.data.find((item) => item.username === value)?.username
                }
              />
            );
          }}
        />
        <Table.Column
          dataIndex="createdAt"
          key="createdAt"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
          sorter

        />


        <Table.Column
          dataIndex="active"
          title="Active"
          render={(value) => (
            <BooleanField
              value={value === true}
              trueIcon={<CheckCircleOutlined />}
              falseIcon={<CloseCircleOutlined />}
              valueLabelTrue="published"
              valueLabelFalse="unpublished"
            />
          )}
        />


        <Table.Column<IConfiguration>
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
