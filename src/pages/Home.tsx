import React from "react";
import UserModal from "../components/UserModal";
import AllUsers from "../components/Home/AllUsers";
import { BsPlus } from "react-icons/bs";
import { useAppContext } from "../context/context";
import Header from "../components/Home/Header";
import { BiSearch } from "react-icons/bi";

const Home: React.FC = () => {
  const { openModal, filterUsers } = useAppContext();

  return (
    <main id="home">
      <UserModal />
      <header>
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
      <div className="container">
        <Header />
        <AllUsers />
      </div>
    </main>
  );
};

export default Home;
