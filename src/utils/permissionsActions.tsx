interface DeletePermisison {
  type: "DELETE_PERMISSION";
  payload: {
    id: string | number;
  };
}

export type PermissionsActions = DeletePermisison;
