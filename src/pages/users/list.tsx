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
  FilterDropdown,
  Select,
  ShowButton,
} from "@pankod/refine";
import { url } from "inspector";
import {  IUser} from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IUser>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
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
        <Table.Column<IUser>
                    title="img_photo"
                    dataIndex="img_photo"
                    render={(_, record) => (
                        <ImageField
                            value={record.img_photo ? record.img_photo[0].response.url : ''}
                            title={record.img_photo ? record.img_photo[0].name : ''}
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
          dataIndex="username"
          key="username"
          title="Username"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("username", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="email"
          key="email"
          title="Email"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("email", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="firstName"
          key="firstName"
          title="Full Name"
          render={(value) =>  <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("firstName", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="phone"
          key="phone"
          title="Phone"
          render={(value) =>  <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("phone", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="company"
          key="company"
          title="Company"
          render={(value) =>  <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("company", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="createdAt"
          key="createdAt"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
          sorter
        />
      
          
      
        <Table.Column<IUser>
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
