import React from "react";
import { MessageStatus, User } from "../../reducer/reducer";
import { BiKey } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../context/context";

const UserShowcase: React.FC<User> = (props) => {
  const { activateMessage } = useAppContext();

  return (
    <div className="user-showcase">
      <div className="showcase">
        <figure className="user-photo">
          <FaUserCircle className="react-icon user" />
          {props.role === "admin" && <BiKey className="react-icon key" />}
        </figure>
        <p className={props.status ? undefined : "user-p inactive hidden"}>
          Upload A Photo
        </p>
      </div>
      <div className="short-info">
        <h3 className={props.status ? undefined : "user-p inactive"}>
          {props.firstName}
        </h3>
        <h3 className={props.status ? undefined : "user-p inactive"}>
          {props.lastName}
        </h3>
        <h4 className={props.status ? undefined : "user-p inactive"}>
          {props.email}
        </h4>
      </div>
      <button
        className={props.status ? "user-btn" : "user-btn inactive"}
        onClick={() => {
          activateMessage(
            MessageStatus.SUCCESS,
            "Invitation has been successfully resent."
          );
        }}
      >
        Resend Invite
      </button>
    </div>
  );
};

export default UserShowcase;
