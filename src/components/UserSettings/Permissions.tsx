import React from "react";
import PermissionGroup from "./PermissionGroup";
import { UserPermissions } from "../../reducer/permissions_reducer";

interface Props {
  permissions: UserPermissions;
  id: string | number;
  status: boolean;
}

const Permissions: React.FC<Props> = (props) => {
  return (
    <>
      {props.permissions.map((item, index) => {
        return (
          <PermissionGroup
            key={index}
            permissions={item}
            index={index}
            id={props.id}
            status={props.status}
          />
        );
      })}
    </>
  );
};

export default Permissions;
