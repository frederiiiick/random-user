export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface IUser {
  name?: IName;
  email?: string;
}