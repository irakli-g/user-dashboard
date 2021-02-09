import React, { useState } from "react";
import { HiOutlineUserCircle, HiOutlineMail } from "react-icons/hi";
import { RiKeyFill } from "react-icons/ri";
import { roles } from "../utils/roles";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../context/context";
import { v4 } from "uuid";
import { MessageStatus } from "../reducer/reducer";
import { permissions } from "../utils/permissions";

const UserModal: React.FC = () => {
  const { isModalOpen, closeModal, addUser, activateMessage } = useAppContext();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState("admin");

  // Regex validation for form
  const emailRegex: RegExp = /^[a-z0-9\.-]+@[a-z0-9]{2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$/i;
  const lettersRegex: RegExp = /^[a-z\s]+$/i;

  return (
    <div className={isModalOpen ? "user-modal active" : "user-modal"}>
      <div className="modal-container">
        <h2>Invite New User</h2>
        <figure className="modal-close">
          <IoMdClose
            className="react-icon close"
            onClick={() => {
              closeModal();
              setFirstName("");
              setLastName("");
              setEmail("");
            }}
          />
        </figure>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-container">
            <HiOutlineUserCircle className="react-icon user" />
            <div className="form-control">
              <input
                type="text"
                placeholder="* First Name"
                name="firstName"
                id="firstName"
                pattern="^[a-zA-Z\s]+$"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.currentTarget.value);
                }}
              />
              <label htmlFor="firstName">* First Name</label>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="* Last Name"
                name="lastName"
                id="lastName"
                pattern="^[a-zA-Z\s]+$"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.currentTarget.value);
                }}
              />
              <label htmlFor="lastName">* Last Name</label>
            </div>
          </div>
          <div className="form-container">
            <HiOutlineMail className="react-icon email" />
            <div className="form-control">
              <input
                type="email"
                placeholder="* Email"
                name="email"
                id="email"
                pattern="^[a-zA-Z0-9\.-]+@[a-zA-Z0-9]{2,}\.[a-z]{2,5}(\.[a-z]{2,5})?$"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <label htmlFor="email">* Email</label>
            </div>
          </div>
          <div className="form-container">
            <RiKeyFill className="react-icon key" />
            <div className="form-control">
              <select
                name="role"
                id="role"
                value={role}
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
              <label htmlFor="role">* Role</label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn"
              type="submit"
              onClick={() => {
                if (firstName && lastName && email && role) {
                  if (
                    emailRegex.test(email) === false ||
                    lettersRegex.test(firstName) === false ||
                    lettersRegex.test(lastName) === false
                  ) {
                    activateMessage(
                      MessageStatus.ERROR,
                      "Invalid input format."
                    );
                  } else {
                    addUser({
                      firstName,
                      lastName,
                      email,
                      role,
                      id: v4(),
                      status: true,
                      permissions,
                      imgUrl: "",
                      superAdmin: false,
                    });
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                  }
                } else {
                  activateMessage(
                    MessageStatus.ERROR,
                    "All fields are required."
                  );
                }
              }}
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
