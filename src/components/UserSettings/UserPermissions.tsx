import React from "react";
import { MessageStatus, User } from "../../reducer/reducer";
import { useAppContext } from "../../context/context";
import Permissions from "./Permissions";

const UserPermissions: React.FC<User> = (props) => {
  const { toggleUserPermissions, activateMessage } = useAppContext();

  return (
    <div className="user-permissions">
      <div>
        <h2>Permissions</h2>
        <p>{props.role}</p>
      </div>
      <div className="super-admin">
        <h3 style={!props.status ? { opacity: 0.3 } : undefined}>
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
            toggleUserPermissions(props.id, "superAdmin", undefined, undefined);
            activateMessage(
              MessageStatus.SUCCESS,
              "Permissions have been successfully changed."
            );
          }}
        >
          <div
            className={
              props.superAdmin === true ? "btn active" : "btn inactive"
            }
          ></div>
        </button>
      </div>
      <div className="permissions-container">
        <Permissions
          permissions={props.permissions}
          id={props.id}
          status={props.status}
        />
      </div>
    </div>
  );
};

export default UserPermissions;
