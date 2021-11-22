export interface Users {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  password: String;
  estado: string;
  role_id: number;
  created_at: string;
  updated_at: string;
  role: IRole;
}

export interface IRole {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

