import React from "react";
import { User } from "../../reducer/reducer";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import { BiKey } from "react-icons/bi";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";

const SingleUser: React.FC<User> = (props) => {
  const { deleteUser, toggleStatus } = useAppContext();

  return (
    <div className="user">
      <div className="user-name">
        <figure className="icon">
          <FaUserCircle
            className="react-icon user-circle"
            style={props.status === false ? { opacity: 0.3 } : undefined}
          />
        </figure>
        <div className="content">
          <h3 style={props.status === false ? { opacity: 0.3 } : undefined}>
            {props.firstName} {props.lastName}
          </h3>
          <h4>{props.email}</h4>
        </div>
      </div>
      <div className="user-role">
        {props.role === "admin" ? (
          <BiKey
            className="react-icon key"
            style={props.status === false ? { opacity: 0.3 } : undefined}
          />
        ) : null}
        <h4 style={props.status === false ? { opacity: 0.3 } : undefined}>
          {props.role}
        </h4>
      </div>
      <div
        className={
          props.status === true ? "user-status active" : "user-status inactive"
        }
        onClick={() => {
          toggleStatus(props.id);
        }}
      >
        <button
          className={props.status === true ? "btn active" : "btn inactive"}
        ></button>
      </div>
      <div className="user-actions">
        <Link to={`/user/${props.id}`}>
          <VscGear
            className="react-icon gear"
            style={!props.status ? { display: "none" } : undefined}
          />
        </Link>
        <FaTrash
          className="react-icon trash"
          onClick={() => {
            deleteUser(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleUser;
