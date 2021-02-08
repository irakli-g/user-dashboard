import React from "react";
import UserModal from "../components/UserModal";
import AllUsers from "../components/Home/AllUsers";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useAppContext } from "../context/context";
import Header from "../components/Home/Header";
import { BiSearch } from "react-icons/bi";

const Home: React.FC = () => {
  const { openModal } = useAppContext();

  return (
    <section id="home">
      <UserModal />
      <header>
        <h1 className="header-title">Project Access</h1>
        <div className="form-control">
          <input type="text" placeholder="Type to filter the table" />
          <BiSearch className="react-icon search" />
        </div>
        <figure className="add-user">
          <BsFillPlusCircleFill
            className="react-icon plus"
            onClick={openModal}
          />
        </figure>
      </header>
      <div className="container">
        <Header />
        <AllUsers />
      </div>
      <footer></footer>
    </section>
  );
};

export default Home;
