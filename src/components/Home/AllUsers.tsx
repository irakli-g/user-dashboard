import React from "react";
import { useAppContext } from "../../context/context";
import SingleUser from "./SingleUser";

const AllUsers: React.FC = () => {
  const { filteredUsers } = useAppContext();
  return (
    <div className="container-users">
      {filteredUsers?.map((item) => {
        return <SingleUser key={item.id} {...item} />;
      })}
    </div>
  );
};

export default AllUsers;
