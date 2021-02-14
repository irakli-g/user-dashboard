interface DeletePermisisons {
  type: "DELETE_PERMISSION";
  payload: {
    id: string | number;
  };
}

export type PermissionsActions = DeletePermisisons;
