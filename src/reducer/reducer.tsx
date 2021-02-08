import { Actions } from "../utils/actions";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export enum MessageStatus {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  EMPTY = "",
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  id: string | number;
  status: boolean;
}

export interface InitialState {
  allUsers: User[];
  filteredUsers: User[];
  message: {
    status: MessageStatus;
    content: string;
  };
}

export const reducer = (state: InitialState, action: Actions): InitialState => {
  return {
    ...state,
  };
};
