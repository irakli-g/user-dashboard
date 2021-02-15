import React from "react";
import { usePermissionsContext } from "../../context/permissions_context";
import Permission from "./Permission";

const AllPermissions: React.FC = () => {
  const { userPermissions } = usePermissionsContext();

  return (
    <div className="permissions-container">
      {userPermissions.map((item, index) => {
        return (
          <ul className="permissions-group" key={index}>
            <h2>Permissions Group {index + 1}</h2>
            <div className="li-container active">
              {item.map((permission) => {
                return <Permission key={permission.id} {...permission} />;
              })}
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default AllPermissions;
