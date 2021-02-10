import React, { useState } from "react";
import { UserPermission } from "../../utils/permissions";
import { BiChevronDown } from "react-icons/bi";
import { useAppContext } from "../../context/context";
import { MessageStatus } from "../../reducer/reducer";
import { BsCircleFill } from "react-icons/bs";

interface Props {
  permissions: UserPermission[];
  index: number;
  id: string | number;
  status: boolean;
}

const PermissionGroup: React.FC<Props> = (props) => {
  const { activateMessage, toggleUserPermissions } = useAppContext();
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <ul>
      <div
        className="ul-header"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <h4 className={props.status ? undefined : "user-p inactive"}>
          <BiChevronDown className="react-icon down" />
          <span>Permission Group {props.index + 1}</span>
        </h4>
      </div>
      <div className={expand ? "li-container active" : "li-container"}>
        {props.permissions.map((item) => {
          return (
            <li key={item.id}>
              <p className={props.status ? undefined : "user-p inactive"}>
                <BsCircleFill
                  className="react-icon circle"
                  style={
                    item.status ? { color: "#add8e6" } : { color: "#f08080" }
                  }
                />
                <span>{item.name}</span>
              </p>
              <button
                style={!props.status ? { opacity: 0.3 } : undefined}
                disabled={!props.status}
                className={
                  item.status === true
                    ? "user-status-btn active"
                    : "user-status-btn inactive"
                }
                onClick={() => {
                  toggleUserPermissions(props.id, "subPermission", item.id);
                  activateMessage(
                    MessageStatus.SUCCESS,
                    "Permissions have been successfully changed."
                  );
                }}
              >
                <div
                  className={
                    item.status === true ? "btn active" : "btn inactive"
                  }
                ></div>
              </button>
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default PermissionGroup;
