import { MessageStatus, User, CurrentSortStatus } from "../reducer/reducer";

interface AddUser {
  type: "ADD_USER";
  payload: User;
}

interface DeleteUser {
  type: "DELETE_USER";
  payload: {
    id: string | number;
  };
}

interface ActivateMessage {
  type: "ACTIVATE_MESSAGE";
  payload: {
    status: MessageStatus;
    content: string;
  };
}

interface ClearMessage {
  type: "CLEAR_MESSAGE";
}

interface OpenModal {
  type: "OPEN_MODAL";
}

interface ClosseModal {
  type: "CLOSE_MODAL";
}

interface ToggleUserStatus {
  type: "TOGGLE_USER_STATUS";
  payload: {
    id: string | number;
  };
}

interface SortUsers {
  type: "SORT_USERS";
  payload: CurrentSortStatus;
}

export type Actions =
  | DeleteUser
  | AddUser
  | ActivateMessage
  | ClearMessage
  | OpenModal
  | ClosseModal
  | ToggleUserStatus
  | SortUsers;
