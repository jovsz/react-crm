import { useState } from "react";
import {
  Edit,
  Form,
  Input,
  Select,
  IResourceComponentsProps,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  useApiUrl,
} from "@pankod/refine";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IUser } from "interfaces";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const apiUrl = useApiUrl();
  const { formProps, saveButtonProps, queryResult } = useForm<IUser>();


  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" >
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
          label="company"
          name="company"
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
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: "True",
                value: "true",
              },
              {
                label: "False",
                value: "false",
              }
            ]}
          />
        </Form.Item>
            
      </Form>
    </Edit>
  );
};
