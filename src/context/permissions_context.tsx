import React, { useContext, useEffect, useReducer } from "react";
import { ReactNode } from "react";
import {
  reducer,
  PermissionsInitialState,
} from "../reducer/permissions_reducer";
import { dummyPermissions } from "../utils/dummyPermissions";

interface PermissionsContextInitialState extends PermissionsInitialState {
  deletePermission: (id: string | number) => void;
  openPermissionsModal: (id?: string | number) => void;
  closePermissionsModal: () => void;
}

const permissionsContext = React.createContext(
  {} as PermissionsContextInitialState
);

const getPermissionsFromStorage = () => {
  let permissions = dummyPermissions;
  if (typeof window !== "undefined") {
    if (localStorage.getItem("permissions") !== null) {
      permissions = JSON.parse(localStorage.getItem("permissions")!);
    }
  }
  return permissions;
};

export const defaultState: PermissionsInitialState = {
  userPermissions: getPermissionsFromStorage(),
  permissionsModal: false,
  permissionToDelete: null,
};

export const PermissionsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "permissions",
        JSON.stringify(state.userPermissions)
      );
    }
  }, [state.userPermissions]);

  const deletePermission = (id: string | number) => {
    dispatch({ type: "DELETE_PERMISSION", payload: { id } });
  };

  const openPermissionsModal = (id?: string | number) => {
    dispatch({ type: "OPEN_PERMISSIONS_MODAL", payload: { id } });
  };

  const closePermissionsModal = () => {
    dispatch({ type: "CLOSE_PERMISSIONS_MODAL" });
  };

  return (
    <permissionsContext.Provider
      value={{
        ...state,
        deletePermission,
        openPermissionsModal,
        closePermissionsModal,
      }}
    >
      {children}
    </permissionsContext.Provider>
  );
};

export const usePermissionsContext = () => useContext(permissionsContext);
