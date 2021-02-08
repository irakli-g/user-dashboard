import React from "react";
import UserModal from "../components/UserModal";
import AllUsers from "../components/AllUsers";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useAppContext } from "../context/context";

const Home: React.FC = () => {
  const { openModal } = useAppContext();

  return (
    <section id="home">
      <UserModal />
      <header>
        <h1 className="header-title">Project Access</h1>
        <div className="form-control">
          <input type="text" placeholder="Type to filter the table" />
        </div>
        <figure className="add-user">
          <BsFillPlusCircleFill
            className="react-icon plus"
            onClick={openModal}
          />
        </figure>
      </header>
      <div className="container">
        <div className="container-header">
          <h4>User</h4>
          <h4>Role</h4>
          <h4>Status</h4>
          <h4>Actions</h4>
        </div>
        <AllUsers />
      </div>
      <footer></footer>
    </section>
  );
};

export default Home;
