import React from "react";

const Pagination = ({ totalData, postPerpage }) => {
  let pages = [];

  for (let i = 1; i < Math.ceil(totalData / postPerpage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="w-12 h-12 border-1 rounded-lg bg-red-300 mt-4 hover:scale-110 cursor-pointer"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
