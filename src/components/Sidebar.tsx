import React from "react";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const { menuOpen, toggleMenu } = useAppContext();
  const navigate = useNavigate();

  return (
    <aside className={menuOpen ? "sidebar active" : "sidebar"}>
      <figure className="sidebar-close">
        <AiFillCloseCircle className="react-icon close" onClick={toggleMenu} />
      </figure>
      <nav>
        <ul>
          {links?.map((item) => {
            const { icon, path, name, id } = item;
            return (
              <li
                key={id}
                onClick={() => {
                  navigate(path, { replace: true });
                }}
              >
                {icon}
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
