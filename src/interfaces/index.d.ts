export interface ICategory {
  id: string;
  title: string;
}

export interface IimageUser {
  id: string;
  filename: string;
  active: boolean;
  createdAt: string;
}

export interface IImage {
  id: string;
  filename: string;
  active: boolean;
  createdAt: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}

export interface IUser {
  id: string;
  username: string;
  img_photo: [
    {
        id: string;
        name: string;
        response: {url:string};
        url: string;
        status: "error" | "success" | "done" | "uploading" | "removed";
    },
  ];
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  rol: string;
  company:string;
  createdAt: string;
  
}

export interface IMaterial {
  id:string;
  type:string;
  name:string;
  id_brand:number;
  brand:string;
  metadata:object[
    {preview:string;}
  ];
  status:boolean;
  createdAt: string;
  img_photo: [
    {
        id: string;
        name: string;
        response: {url:string};
        url: string;
        status: "error" | "success" | "done" | "uploading" | "removed";
    },
  ];
}

export interface IMaterialFilterVariables {
  q: string;
  category: string;
  status: string;
  createdAt: [Dayjs, Dayjs];
}

export interface IOptionGroup {
  value: string;
  label: string | React.ReactNode;
}

export interface IOptions {
  label: string | React.ReactNode;
  options: IOptionGroup[];
}