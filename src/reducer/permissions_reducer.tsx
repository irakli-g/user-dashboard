import { PermissionsActions } from "../utils/permissionsActions";

export interface UserPermission {
  status: boolean;
  name: string;
  id: number | string;
}

export type UserPermissions = UserPermission[][];

export interface PermissionsInitialState {
  userPermissions: UserPermissions;
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
    };
  }
  return {
    ...state,
  };
};
