import React, { useContext, useReducer } from "react";
import { ReactNode } from "react";
import {
  reducer,
  PermissionsInitialState,
} from "../reducer/permissions_reducer";
import { v4 } from "uuid";

interface PermissionsContextInitialState extends PermissionsInitialState {}

const permissionsContext = React.createContext(
  {} as PermissionsContextInitialState
);

export const defaultState: PermissionsInitialState = {
  userPermissions: [
    [
      {
        status: false,
        name: "Permission 1",
        id: v4(),
      },
      {
        status: false,
        name: "Permission 2",
        id: v4(),
      },
      {
        status: true,
        name: "Permission 3",
        id: v4(),
      },
      {
        status: true,
        name: "Permission 4",
        id: v4(),
      },
      {
        status: false,
        name: "Permission 5",
        id: v4(),
      },
    ],
    [
      {
        status: false,
        name: "Permission 6",
        id: v4(),
      },
      {
        status: false,
        name: "Permission 7",
        id: v4(),
      },
      {
        status: true,
        name: "Permission 8",
        id: v4(),
      },
      {
        status: true,
        name: "Permission 9",
        id: v4(),
      },
      {
        status: false,
        name: "Permission 10",
        id: v4(),
      },
    ],
    [
      {
        status: true,
        name: "Permission 11",
        id: v4(),
      },
      {
        status: false,
        name: "Permission 12",
        id: v4(),
      },
    ],
  ],
};

export const PermissionsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <permissionsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </permissionsContext.Provider>
  );
};

export const usePermissionsContext = () => useContext(permissionsContext);
