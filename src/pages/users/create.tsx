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

import { IUser } from "interfaces";

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const { formProps, saveButtonProps } = useForm<IUser>();

  const apiUrl = useApiUrl();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="lastName"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="phone"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label="rol"
          name="rol"
        >
        <Select
            options={[
              {
                label: "user",
                value: "user",
              },
              {
                label: "designer",
                value: "designer",
              },
              {
                label: "admin",
                value: "admin",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="image">
              <Form.Item
                name="img_photo"
                valuePropName="url"
                getValueFromEvent={getValueFromEvent}
                noStyle
              >
              <Upload.Dragger
                name="file"
                action={`${apiUrl}/user/upload`}
                listType="picture"
                maxCount={1}
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
