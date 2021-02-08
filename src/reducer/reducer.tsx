import { Actions } from "../utils/actions";

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
  role: string;
  id: string | number;
  status: boolean;
}

export interface InitialState {
  allUsers: User[];
  filteredUsers: User[];
  isModalOpen: boolean;
  message: {
    status: MessageStatus;
    content: string;
  };
}

export const reducer = (state: InitialState, action: Actions): InitialState => {
  if (action.type === "OPEN_MODAL") {
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "ACTIVATE_MESSAGE") {
    return {
      ...state,
      message: {
        status: action.payload.status,
        content: action.payload.content,
      },
    };
  }
  if (action.type === "CLEAR_MESSAGE") {
    return {
      ...state,
      message: {
        status: MessageStatus.EMPTY,
        content: "",
      },
    };
  }
  return {
    ...state,
  };
};
