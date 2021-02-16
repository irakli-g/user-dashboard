interface DeletePermisison {
  type: "DELETE_PERMISSION";
  payload: {
    id: string | number;
  };
}

interface OpenPermissionsModal {
  type: "OPEN_PERMISSIONS_MODAL";
  payload?: {
    id: string | number | undefined;
  };
}
interface ClosePermisisonsModal {
  type: "CLOSE_PERMISSIONS_MODAL";
}

export type PermissionsActions =
  | DeletePermisison
  | OpenPermissionsModal
  | ClosePermisisonsModal;
