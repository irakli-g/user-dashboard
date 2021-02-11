import React, { useState } from "react";
import { MessageStatus, User } from "../../reducer/reducer";
import { useAppContext } from "../../context/context";
import { roles } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router";
import { history } from "../../utils/history";

const UserDetails: React.FC<User> = (props) => {
  const { toggleStatus, updateUser, activateMessage } = useAppContext();
  const [firstName, setFirstName] = useState<string>(props.firstName);
  const [lastName, setLastName] = useState<string>(props.lastName);
  const [role, setRole] = useState<string>(props.role);
  const navigate: NavigateFunction = useNavigate();
  const lettersRegex: RegExp = /^[a-z\s]+$/i;

  return (
    <div className="user-details">
      <h2>Details</h2>
      <div className="user-status-container">
        <div
          className={
            props.status === true
              ? "user-status active"
              : "user-status inactive"
          }
          onClick={() => {
            toggleStatus(props.id);
          }}
        >
          <button
            className={props.status === true ? "btn active" : "btn inactive"}
          ></button>
        </div>
        <p>
          The user is <span>{props.status ? "Active" : "Inactive"}</span>
        </p>
        {!props.status && (
          <button
            className="back-btn"
            onClick={() => {
              history().back();
            }}
          >
            Go Back
          </button>
        )}
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label
            htmlFor="firstName"
            style={!props.status ? { opacity: 0.3 } : undefined}
          >
            * First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            pattern="^[a-zA-Z\s]+$"
            value={firstName}
            style={!props.status ? { opacity: 0.3 } : undefined}
            disabled={!props.status}
            onChange={(e) => {
              setFirstName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="lastName"
            style={!props.status ? { opacity: 0.3 } : undefined}
          >
            * Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            pattern="^[a-zA-Z\s]+$"
            value={lastName}
            style={!props.status ? { opacity: 0.3 } : undefined}
            disabled={!props.status}
            onChange={(e) => {
              setLastName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="role"
            style={!props.status ? { opacity: 0.3 } : undefined}
          >
            * Role
          </label>
          <select
            name="role"
            id="role"
            value={role}
            disabled={!props.status}
            style={!props.status ? { opacity: 0.3 } : undefined}
            onChange={(e) => {
              setRole(e.currentTarget.value);
            }}
          >
            {roles?.map((item) => {
              return (
                <option value={item.name.toLowerCase()} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <button
        className={props.status ? "user-btn" : "user-btn inactive"}
        onClick={() => {
          if (firstName && lastName && role) {
            if (
              lettersRegex.test(firstName) === false ||
              lettersRegex.test(lastName) === false
            ) {
              activateMessage(MessageStatus.ERROR, "Invalid input format.");
            } else {
              updateUser(props.id, firstName, lastName, role);
              activateMessage(
                MessageStatus.SUCCESS,
                "Changes have been succesfully saved."
              );
              navigate("/", { replace: true });
            }
          } else {
            activateMessage(MessageStatus.ERROR, "All fields are required.");
          }
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default UserDetails;
