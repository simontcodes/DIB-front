export interface User {
  id?: any;
  name?: string | null | undefined;
  role?: string | undefined;
  team?: string | undefined;
  token?: any;
}
export interface UserData {
  _id: string,
  name: string,
  email: string,
  password: string,
  role: string,
  __v: number
}
export interface SidebarData {
  name: string,
  email: string,
}