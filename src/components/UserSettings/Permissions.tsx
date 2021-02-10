import React from "react";
import { UserPermission } from "../../utils/permissions";
import PermissionGroup from "./PermissionGroup";

interface Props {
  permissions: UserPermission[][];
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
