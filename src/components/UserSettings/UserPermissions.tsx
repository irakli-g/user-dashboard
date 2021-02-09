import React from "react";
import { User } from "../../reducer/reducer";
import { useAppContext } from "../../context/context";

const UserPermissions: React.FC<User> = (props) => {
  const { toggleUserPermissions } = useAppContext();
  return (
    <div className="user-permissions">
      <div>
        <h2>Permissions</h2>
        <p>{props.role}</p>
      </div>
      <div className="super-admin">
        <h3 className={props.status ? undefined : "user-p inactive"}>
          Super Admin
        </h3>
        <button
          style={!props.status ? { opacity: 0.3 } : undefined}
          disabled={!props.status}
          className={
            props.superAdmin === true
              ? "user-status-btn active"
              : "user-status-btn inactive"
          }
          onClick={() => {
            toggleUserPermissions(props.id, "superAdmin", undefined);
          }}
        >
          <button
            className={
              props.superAdmin === true ? "btn active" : "btn inactive"
            }
          ></button>
        </button>
      </div>
    </div>
  );
};

export default UserPermissions;
