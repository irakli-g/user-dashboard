import { Actions } from "../utils/actions";

export enum MessageStatus {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  EMPTY = "",
}

export enum CurrentSortStatus {
  USER = "user",
  ROLE = "role",
  STATUS = "status",
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
  currentSort: CurrentSortStatus;
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
  if (action.type === "ADD_USER") {
    const { firstName, lastName, email, id, role, status } = action.payload;
    return {
      ...state,
      isModalOpen: false,
      message: {
        status: MessageStatus.SUCCESS,
        content: "Invitation has been successfully sent.",
      },
      allUsers: [
        ...state.allUsers,
        { firstName, lastName, email, id, role, status },
      ],
      filteredUsers: [
        ...state.filteredUsers,
        { firstName, lastName, email, id, role, status },
      ],
    };
  }
  if (action.type === "DELETE_USER") {
    let tempUsers = state.allUsers.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
      message: {
        status: MessageStatus.WARNING,
        content: "User has been succesfully deleted.",
      },
    };
  }
  if (action.type === "TOGGLE_USER_STATUS") {
    let tempUsers = state.allUsers.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          status: !item.status,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
      message: {
        status: MessageStatus.SUCCESS,
        content: "User status successfully changed.",
      },
    };
  }
  if (action.type === "SORT_USERS") {
    if (action.payload === CurrentSortStatus.USER) {
      let tempUsers = state.allUsers.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
      return {
        ...state,
        currentSort: action.payload,
        allUsers: tempUsers,
        filteredUsers: tempUsers,
      };
    }
  }
  return {
    ...state,
  };
};
