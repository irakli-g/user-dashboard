import React, { useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useAppContext } from "../../context/context";
import { CurrentSortStatus } from "../../reducer/reducer";

const Header: React.FC = () => {
  const { currentSort, sortUsers } = useAppContext();

  useEffect(() => {
    sortUsers(CurrentSortStatus.USER);
  }, []);

  return (
    <div className="container-header">
      <h4
        className={
          currentSort === CurrentSortStatus.USER ? "active" : undefined
        }
        onClick={() => {
          sortUsers(CurrentSortStatus.USER);
        }}
      >
        User <HiOutlineChevronDown className="react-icon chevron" />
      </h4>
      <h4
        className={
          currentSort === CurrentSortStatus.ROLE ? "active" : undefined
        }
        onClick={() => {
          sortUsers(CurrentSortStatus.ROLE);
        }}
      >
        Role <HiOutlineChevronDown className="react-icon chevron" />
      </h4>
      <h4
        className={
          currentSort === CurrentSortStatus.STATUS ? "active" : undefined
        }
        onClick={() => {
          sortUsers(CurrentSortStatus.STATUS);
        }}
      >
        Status <HiOutlineChevronDown className="react-icon chevron" />{" "}
      </h4>
      <h4>Actions</h4>
    </div>
  );
};

export default Header;
