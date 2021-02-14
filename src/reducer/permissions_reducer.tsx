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
  return {
    ...state,
  };
};
