import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import {
  CurrentSortStatus,
  InitialState,
  MessageStatus,
  reducer,
  User,
} from "../reducer/reducer";

interface ContextInitialState extends InitialState {
  addUser: (values: User) => void;
  openModal: () => void;
  closeModal: () => void;
  activateMessage: (status: MessageStatus, content: string) => void;
  clearMessage: () => void;
  deleteUser: (id: string | number) => void;
  toggleStatus: (id: string | number) => void;
  sortUsers: (value: CurrentSortStatus) => void;
}

const getUsersFromStorage = () => {
  let users: User[] = [];
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

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        addUser,
        openModal,
        closeModal,
        activateMessage,
        clearMessage,
        deleteUser,
        toggleStatus,
        sortUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
