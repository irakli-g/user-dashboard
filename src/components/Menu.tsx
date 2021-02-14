import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useAppContext } from "../context/context";

const Menu: React.FC = () => {
  const { toggleMenu } = useAppContext();

  return (
    <div className="menu" onClick={toggleMenu}>
      <CgMenuGridR className="react-icon grid" />
    </div>
  );
};

export default Menu;
