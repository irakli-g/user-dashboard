import { PermissionsActions } from "../utils/permissionsActions";

export interface UserPermission {
  status: boolean;
  name: string;
  id: number | string;
}

export type UserPermissions = UserPermission[][];

export interface PermissionsInitialState {
  userPermissions: UserPermissions;
  permissionsModal: boolean;
  permissionToDelete: {
    id: string | number;
  } | null;
}

export const reducer = (
  state: PermissionsInitialState,
  action: PermissionsActions
): PermissionsInitialState => {
  if (action.type === "DELETE_PERMISSION") {
    let tempPermissions = state.userPermissions.map((item) => {
      return item.filter((permission) => permission.id !== action.payload.id);
    });
    return {
      ...state,
      userPermissions: tempPermissions,
      permissionToDelete: null,
    };
  }
  if (action.type === "OPEN_PERMISSIONS_MODAL") {
    if (action.payload?.id) {
      return {
        ...state,
        permissionsModal: true,
        permissionToDelete: {
          ...state.permissionToDelete,
          id: action.payload.id,
        },
      };
    } else {
      return {
        ...state,
        permissionsModal: true,
      };
    }
  }
  if (action.type === "CLOSE_PERMISSIONS_MODAL") {
    return {
      ...state,
      permissionsModal: false,
    };
  }
  return {
    ...state,
  };
};
