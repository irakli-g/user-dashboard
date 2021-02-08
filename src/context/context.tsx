import React, { ReactNode, useContext, useReducer } from "react";
import { InitialState, MessageStatus, reducer } from "../reducer/reducer";

interface ContextInitialState extends InitialState {}

const defaultState: InitialState = {
  allUsers: [],
  filteredUsers: [],
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

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
