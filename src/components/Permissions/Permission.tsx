import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { UserPermission } from "../../reducer/permissions_reducer";
import { FaTrash } from "react-icons/fa";
import { usePermissionsContext } from "../../context/permissions_context";

const Permission: React.FC<UserPermission> = (props) => {
  const { openPermissionsModal } = usePermissionsContext();

  return (
    <li className="permission">
      <p>
        <BsCircleFill
          className="react-icon circle"
          style={props.status ? { color: "#add8e6" } : { color: "#f08080" }}
        />
        <span>{props.name}</span>
        <FaTrash
          className="react-icon trash"
          onClick={() => {
            openPermissionsModal(props.id);
          }}
        />
      </p>
      <button
        style={props.status ? { opacity: 0.3 } : undefined}
        disabled={!props.status}
        className={
          props.status === true
            ? "permission-btn active"
            : "permission-btn inactive"
        }
        onClick={() => {}}
      >
        <div
          className={props.status === true ? "btn active" : "btn inactive"}
        ></div>
      </button>
    </li>
  );
};

export default Permission;
