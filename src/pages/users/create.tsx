import { useState } from "react";
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  IResourceComponentsProps,
  useForm,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IUser } from "interfaces";

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const { formProps, saveButtonProps } = useForm<IUser>();


  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
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
                label: "published",
                value: "published",
              },
              {
                label: "draft",
                value: "draft",
              },
              {
                label: "rejected",
                value: "rejected",
              },
            ]}
          />
        </Form.Item>

        
        
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        
      </Form>
    </Create>
  );
};
