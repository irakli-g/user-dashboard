import React, { useState } from "react";
import { useAppContext } from "../../context/context";
import SingleUser from "./SingleUser";
import { pagination } from "../../utils/pagination";

const AllUsers: React.FC = () => {
  const { filteredUsers } = useAppContext();
  const [userPerPage, setUserPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const increasePage = () => {
    setPage((oldValue) => {
      let newValue = oldValue + 1;
      if (newValue === paginatedUsers.length) {
        newValue = 0;
      }
      return newValue;
    });
  };

  const decreasePage = () => {
    setPage((oldValue) => {
      let newValue = oldValue - 1;
      if (newValue < 0) {
        newValue = paginatedUsers.length - 1;
      }
      return newValue;
    });
  };

  const paginatedUsers = pagination(filteredUsers, userPerPage);
  const currentPaginatedUsers = paginatedUsers[page];
  return (
    <>
      <div className="container-users">
        {currentPaginatedUsers?.map((item) => {
          return <SingleUser key={item.id} {...item} />;
        })}
      </div>
      <div
        className="pagination"
        style={paginatedUsers.length === 0 ? { display: "none" } : undefined}
      >
        <div className="data-per-page">
          <label htmlFor="perPage">Records on page</label>
          <select
            name="perPage"
            id="perPage"
            value={userPerPage}
            onChange={(e) => {
              setUserPerPage(Number(e.currentTarget.value));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="controls">
          <button className="btn" onClick={decreasePage}>
            Previous
          </button>
          <div className="pages">
            {paginatedUsers.map((_, index) => {
              return (
                <button
                  className={index === page ? "btn-page active" : "btn-page"}
                  key={index}
                  value={index}
                  onClick={(e) => setPage(Number(e.currentTarget.value))}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <button className="btn" onClick={increasePage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
