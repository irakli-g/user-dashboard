import React from "react";
import UserModal from "../components/UserModal";
import AllUsers from "../components/Home/AllUsers";
import ContainerHeader from "../components/Home/ContainerHeader";

const Home: React.FC = () => {
  return (
    <main id="home">
      <UserModal />
      <div className="container">
        <ContainerHeader />
        <AllUsers />
      </div>
    </main>
  );
};

export default Home;
