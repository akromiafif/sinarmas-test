import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import User from "./User";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [userResult, setUserResult] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [totalData, setTotalData] = useState(0);

  const getUser = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");

    setPerPage(response.data.per_page);
    setTotalData(response.data.total);
    setUsers(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const searchRes = users.filter((user) => {
      return search.toLowerCase() === ""
        ? user
        : user.first_name.toLowerCase().includes(search);
    });

    setUserResult(searchRes);
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <input
        placeholder="search by firstname"
        className="w-3/4 border-2 rounded-lg mb-6 py-3 px-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-3/4 grid grid-cols-3 gap-2">
        {search === ""
          ? users?.map((user, index) => {
              return (
                <User
                  id={user?.id}
                  key={index}
                  firstName={user?.first_name}
                  lastName={user?.last_name}
                  email={user?.email}
                  avatar={user?.avatar}
                />
              );
            })
          : userResult?.map((user, index) => {
              return (
                <User
                  id={user?.id}
                  key={index}
                  firstName={user?.first_name}
                  lastName={user?.last_name}
                  email={user?.email}
                  avatar={user?.avatar}
                />
              );
            })}
      </div>

      <Pagination totalData={totalData} postPerpage={perPage} />
    </div>
  );
};

export default Home;
