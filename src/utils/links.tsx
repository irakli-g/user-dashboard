import { FaUsers, FaSlidersH } from "react-icons/fa";

interface Link {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
}

type Links = Link[];

export const links: Links = [
  {
    id: 1,
    name: "Users",
    path: "/",
    icon: <FaUsers className="react-icon users" />,
  },
  {
    id: 2,
    name: "Permissions",
    path: "/permissions",
    icon: <FaSlidersH className="react-icon slider" />,
  },
];
