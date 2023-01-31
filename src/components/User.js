import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, firstName, lastName, email, avatar }) => {
  return (
    <Link to={`/user/${id}`}>
      <div className="flex flex-col bg-blue-300  justify-center items-center rounded-lg py-4 hover:scale-110 hover:bg-green-200 cursor-pointer">
        <img src={avatar} className="h-32 w-32 rounded-full" />
        <p className="text-lg">{firstName}</p>
        <p className="text-xl font-bold">{lastName}</p>
        <p className="text-black-300">{email}</p>
      </div>
    </Link>
  );
};

export default User;
