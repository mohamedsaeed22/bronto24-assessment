export interface User {
  id?: number;
  created_at?: string;
  name: string;
  user_name: string;
  age: number | undefined;
  country: {
    id: number;
    name: string;
  };
  gender: string;
  job_title: string;
}

export interface Country {
  id: number;
  name: string;
}

export interface UserFormData {
  name: string;
  user_name: string;
  age?: number | undefined;
  country: number;
  gender: string;
  job_title: string;
}
