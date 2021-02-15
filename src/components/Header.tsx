import React from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/context";
import { BiSearch } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { openModal, filterUsers } = useAppContext();
  const navigate = useNavigate();

  if (pathname.includes("permissions")) {
    return (
      <header className="permissions-header">
        <h1 className="header-title">User Permissions</h1>
      </header>
    );
  }

  if (pathname.includes("user")) {
    return (
      <header className="user-header">
        <h1 className="header-title">User Setup</h1>
        <figure className="header-icon">
          <VscSettingsGear
            className="react-icon gear"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/", { replace: true });
            }}
          />
        </figure>
      </header>
    );
  }
  return (
    <header className="home-header">
      <h1 className="header-title">Project Access</h1>
      <div className="form-control">
        <input
          type="text"
          placeholder="Type to filter the table"
          onChange={(e) => {
            filterUsers(e.currentTarget.value);
          }}
        />
        <BiSearch className="react-icon search" />
      </div>
      <figure className="header-icon" onClick={openModal}>
        <BsPlus className="react-icon plus" onClick={openModal} />
      </figure>
    </header>
  );
};

export default Header;
