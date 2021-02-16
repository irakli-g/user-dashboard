import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import {
  CurrentSortStatus,
  InitialState,
  MessageStatus,
  reducer,
  User,
} from "../reducer/reducer";
import { dummyUsers } from "../utils/dummyUsers";

interface ContextInitialState extends InitialState {
  addUser: (values: User) => void;
  openUserModal: () => void;
  closeUserModal: () => void;
  activateMessage: (status: MessageStatus, content: string) => void;
  clearMessage: () => void;
  deleteUser: (id: string | number) => void;
  toggleStatus: (id: string | number) => void;
  sortUsers: (value: CurrentSortStatus) => void;
  filterUsers: (value: string) => void;
  updateUser: (
    id: string | number,
    firstName: string,
    lastName: string,
    role: string
  ) => void;
  toggleUserPermissions: (
    id: string | number,
    kind: string,
    permissionId: string | number | undefined,
    groupPermissionStatus: boolean | undefined
  ) => void;
  toggleMenu: () => void;
}

const getUsersFromStorage = () => {
  let users = dummyUsers;
  if (typeof window !== "undefined") {
    if (localStorage.getItem("users") !== null) {
      users = JSON.parse(localStorage.getItem("users")!);
    }
  }
  return users;
};

const defaultState: InitialState = {
  allUsers: getUsersFromStorage(),
  filteredUsers: getUsersFromStorage(),
  isModalOpen: false,
  menuOpen: false,
  message: {
    status: MessageStatus.EMPTY,
    content: "",
  },
  currentSort: CurrentSortStatus.EMPTY,
};

const AppContext = React.createContext<ContextInitialState>(
  {} as ContextInitialState
);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearMessage();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [state.message.status]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("users", JSON.stringify(state.allUsers));
    }
  }, [state.allUsers]);

  const addUser = (values: User) => {
    dispatch({ type: "ADD_USER", payload: values });
  };

  const deleteUser = (id: string | number) => {
    dispatch({ type: "DELETE_USER", payload: { id } });
  };

  const openUserModal = () => {
    dispatch({ type: "OPEN_USER_MODAL" });
  };
  const closeUserModal = () => {
    dispatch({ type: "CLOSE_USER_MODAL" });
  };

  const activateMessage = (status: MessageStatus, content: string) => {
    dispatch({ type: "ACTIVATE_MESSAGE", payload: { status, content } });
  };

  const clearMessage = () => {
    dispatch({ type: "CLEAR_MESSAGE" });
  };

  const toggleStatus = (id: string | number) => {
    dispatch({ type: "TOGGLE_USER_STATUS", payload: { id } });
  };

  const sortUsers = (value: CurrentSortStatus) => {
    dispatch({ type: "SORT_USERS", payload: value });
  };

  const filterUsers = (value: string) => {
    dispatch({ type: "FILTER_USERS", payload: value });
  };

  const updateUser = (
    id: string | number,
    firstName: string,
    lastName: string,
    role: string
  ) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { id, firstName, lastName, role },
    });
  };

  const toggleUserPermissions = (
    id: string | number,
    kind: string,
    permissionId: string | number | undefined,
    groupPermissionStatus: boolean | undefined
  ) => {
    dispatch({
      type: "TOGGLE_USER_PERMISSIONS",
      payload: { id, kind, permissionId, groupPermissionStatus },
    });
  };

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addUser,
        openUserModal,
        closeUserModal,
        activateMessage,
        clearMessage,
        deleteUser,
        toggleStatus,
        sortUsers,
        filterUsers,
        updateUser,
        toggleUserPermissions,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
