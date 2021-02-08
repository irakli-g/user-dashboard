import { User } from "../reducer/reducer";

interface AddUser {
  action: "ADD_USER";
  payload: User;
}

interface DeleteUser {
  action: "DELETE_USER";
  payload: {
    id: string | number;
  };
}

export type Actions = DeleteUser | AddUser;
