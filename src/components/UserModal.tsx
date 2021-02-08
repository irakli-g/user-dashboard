import React, { useState } from "react";
import { HiOutlineUserCircle, HiOutlineMail } from "react-icons/hi";
import { RiKeyFill } from "react-icons/ri";
import { roles } from "../utils/roles";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../context/context";
import { v4 } from "uuid";
import { MessageStatus } from "../reducer/reducer";

const UserModal: React.FC = () => {
  const { isModalOpen, closeModal, addUser, activateMessage } = useAppContext();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState("admin");

  return (
    <div className={isModalOpen ? "user-modal active" : "user-modal"}>
      <div className="modal-container">
        <h2>Invite New User</h2>
        <figure className="modal-close">
          <IoMdClose className="react-icon close" onClick={closeModal} />
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
                  addUser({
                    firstName,
                    lastName,
                    email,
                    role,
                    id: v4(),
                    status: true,
                  });
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
            <p className="validation-text"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
