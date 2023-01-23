export interface Sign {
  email: string;
  password: string;
}

export interface LoggedInUser {
  accessToken: string;
  user: {
    email: string;
    id: null;
  };
}
