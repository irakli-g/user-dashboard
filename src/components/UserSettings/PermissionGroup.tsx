import React, { useEffect, useState } from "react";
import { UserPermission } from "../../utils/permissions";
import { BiChevronDown } from "react-icons/bi";
import { useAppContext } from "../../context/context";
import { MessageStatus } from "../../reducer/reducer";
import { BsCircleFill } from "react-icons/bs";
import { stat } from "fs";

interface Props {
  permissions: UserPermission[];
  index: number;
  id: string | number;
  status: boolean;
}

const PermissionGroup: React.FC<Props> = (props) => {
  const statusArr = props.permissions.map((item) => item.status);
  const getGroupStatus = () => {
    let status = true;
    if (statusArr.indexOf(true) !== -1) {
      status = true;
    } else if (statusArr.indexOf(true) === -1) {
      status = false;
    }
    return status;
  };

  const { activateMessage, toggleUserPermissions } = useAppContext();
  const [expand, setExpand] = useState<boolean>(false);
  const [groupStatus, setGroupStatus] = useState<boolean>(getGroupStatus());
  useEffect(() => {
    setGroupStatus(getGroupStatus());
  }, [props.permissions]);

  return (
    <ul>
      <div className="ul-header">
        <h4
          className={props.status ? undefined : "user-p inactive"}
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <BiChevronDown className="react-icon down" />
          <span>Permission Group {props.index + 1}</span>
        </h4>
        <button
          style={!props.status ? { opacity: 0.3 } : undefined}
          disabled={!props.status}
          className={
            groupStatus === true
              ? "user-status-btn active"
              : "user-status-btn inactive"
          }
          onClick={() => {
            setGroupStatus(!groupStatus);
            toggleUserPermissions(
              props.id,
              "groupPermission",
              props.index,
              groupStatus
            );
            activateMessage(
              MessageStatus.SUCCESS,
              "Permissions have been successfully changed."
            );
          }}
        >
          <div
            className={groupStatus === true ? "btn active" : "btn inactive"}
          ></div>
        </button>
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
                  toggleUserPermissions(
                    props.id,
                    "subPermission",
                    item.id,
                    undefined
                  );
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
