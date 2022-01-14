import { useState } from "react";
import {
  Edit,
  Form,
  Input,
  Select,
  IResourceComponentsProps,
  useForm,
  useFileUploadState,
  getValueFromEvent,
  Upload,
  useApiUrl,
  useShow,
  Create,
  DeleteButton,
  BooleanField,
  Icons,
  Switch

} from "@pankod/refine";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";


import "react-mde/lib/styles/css/react-mde-all.css";

import { IMaterial } from "interfaces";

export const ConfigurationEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const apiUrl = useApiUrl();
  const { formProps, saveButtonProps } = useForm<IMaterial>();
  const { queryResult } = useShow<IMaterial>();
  const { isLoading, onChange } = useFileUploadState();

  const { data } = queryResult;
  const record = data?.data;

  return (

    <Edit
      saveButtonProps={{
        ...saveButtonProps,
        disabled: isLoading,
      }}
    >

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
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="material_array"
          name="material_array"
        >
          <ReactMde

            generateMarkdownPreview={(material_array) =>
              Promise.resolve(
                <ReactMarkdown>{material_array[0]}</ReactMarkdown>,
              )
            }
          />
        </Form.Item>
        <Form.Item
          label="preset"
          name="preset"
          valuePropName= "preset"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Active"
          name="active"
          valuePropName="active"
        >
          <Switch />
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
                action={`${apiUrl}/configuration/upload`}
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
    </Edit>
  );
};
