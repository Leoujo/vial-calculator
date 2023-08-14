export interface User {
  email: string;
  password: string;
}

export interface LoggedUser {
  user: User;
  token: string;
}
