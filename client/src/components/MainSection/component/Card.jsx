import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const baseURL = "http://localhost:5000";

const Card = ({ handleEdit, handleReRender, empData }) => {
  const { firstname, lastname, job, email, image } = empData;
  const [dropDown, setDropDown] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseURL}/employee/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      handleReRender(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <BsThreeDotsVertical
          size={20}
          onClick={() => setDropDown(!dropDown)}
          className="cursor-pointer"
        />
        {dropDown && (
          <ul
            className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 shadow-md rounded-lg"
            onMouseLeave={() => setDropDown(false)}
          >
            <li
              onClick={() => handleEdit(empData._id)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Edit
            </li>
            <li
              onClick={() => handleDelete(empData._id)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Delete
            </li>
          </ul>
        )}
      </div>
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={firstname}
          className="w-16 h-16 object-cover rounded-full border border-gray-300"
        />
        <div className="ml-4">
          <div className="text-lg font-semibold">
            {firstname} {lastname}
          </div>
          <div className="text-sm text-gray-600">{email}</div>
        </div>
      </div>
      <div className="text-sm text-gray-700">{job}</div>
    </div>
  );
};

export default Card;
