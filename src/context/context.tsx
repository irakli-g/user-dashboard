import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import { InitialState, MessageStatus, reducer, User } from "../reducer/reducer";

interface ContextInitialState extends InitialState {
  addUser: (values: User) => void;
  openModal: () => void;
  closeModal: () => void;
  activateMessage: (status: MessageStatus, content: string) => void;
  clearMessage: () => void;
}

const defaultState: InitialState = {
  allUsers: [],
  filteredUsers: [],
  isModalOpen: false,
  message: {
    status: MessageStatus.EMPTY,
    content: "",
  },
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

  const addUser = (values: User) => {
    dispatch({ type: "ADD_USER", payload: values });
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        addUser,
        openModal,
        closeModal,
        activateMessage,
        clearMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
