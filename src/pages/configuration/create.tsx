import { useState } from "react";
import {
  Create,
  Form,
  Input,
  Select,
  getValueFromEvent,
  useSelect,
  useApiUrl,
  IResourceComponentsProps,
  useForm,
  Upload,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IConfiguration, IUser } from "interfaces";

export const ConfigurationCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const { formProps, saveButtonProps } = useForm<IConfiguration>();
  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "user",
  });

  const apiUrl = useApiUrl();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="note"
          name="note"
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="total_price"
          name="total_price"
        >
        <Input />
        </Form.Item>

        <Form.Item
          label="Create By"
          name={["user", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps}  />
        </Form.Item>

        
        <Form.Item label="img_photo">
              <Form.Item
                name="img_photo"
                valuePropName="url"
                getValueFromEvent={getValueFromEvent}
                noStyle
              >
              <Upload.Dragger
                name="file"
                action={`${apiUrl}/configuration/upload`}
                listType="picture"
                maxCount={5}
                multiple
              >
              <p className="ant-upload-text">
                Drag & drop a file in this area
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};
