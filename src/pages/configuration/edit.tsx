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
 
} from "@pankod/refine";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import axios from 'axios';

import "react-mde/lib/styles/css/react-mde-all.css";

import { IMaterial } from "interfaces";

export const MaterialEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  const apiUrl = useApiUrl();
  const { formProps, saveButtonProps } = useForm<IMaterial>();
  const { queryResult } = useShow<IMaterial>();
  const { isLoading, onChange } = useFileUploadState();

  const { data} = queryResult;
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
            label="type"
            name="type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
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
            label="brand"
            name="brand"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="id_brand"
            name="id_brand"
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

          <Form.Item label="img_photo">
                <Form.Item
                  name="img_photo"
                  valuePropName="fileList"
                  getValueFromEvent={getValueFromEvent}
                  noStyle
                  
                >
                  
                <Upload.Dragger
                  name="file"
                  action={`${apiUrl}/material/upload`}
                  listType="picture"
                  maxCount={1}
                  onChange={onChange}
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
