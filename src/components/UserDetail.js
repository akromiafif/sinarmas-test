import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const getSingleUser = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);

    setUserData(response.data.data);
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <div className="flex flex-col rounded-lg w-full h-screen justify-center items-center">
      <Link to="/">
        <button className="px-8 py-2 rounded-full bg-cyan-300 mb-8 hover:scale-110 cursor-pointer">
          <p className="text-xl">Back</p>
        </button>
      </Link>
      <div className="flex flex-col bg-blue-300 justify-center items-center w-[400px] rounded-lg py-4">
        <img src={userData?.avatar} className="w-48 h-48 rounded-full" />
        <p className="text-lg">{userData?.first_name}</p>
        <p className="text-xl font-bold">{userData?.last_name}</p>
        <p className="text-black-300">{userData?.email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
