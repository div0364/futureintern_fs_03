import React, { useState } from "react";
import { useFormik } from "formik";

const baseURL = "http://localhost:5000";

const EditModalDetails = ({ EmpById, setEditModal }) => {
  const { firstname, lastname, email, phone, job, dateOfJoining, image } =
    EmpById;
  const [loading, setLoading] = useState(false);

  const handleEdit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/employee/${EmpById._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Send updated values
      });
      if (!res.ok) {
        throw new Error("Failed to update employee.");
      }
      const data = await res.json();
      setLoading(false);
      setEditModal(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      email,
      phone,
      job,
      dateOfJoining,
      image,
    },
    onSubmit: (values) => {
      handleEdit(values);
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Employee Details</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              required
              onChange={formik.handleChange}
              value={formik.values.firstname}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              required
              onChange={formik.handleChange}
              value={formik.values.lastname}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              type="text"
              name="image"
              required
              onChange={formik.handleChange}
              value={formik.values.image}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              required
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="job"
              className="block text-sm font-medium text-gray-700"
            >
              Job Position
            </label>
            <input
              id="job"
              type="text"
              name="job"
              required
              onChange={formik.handleChange}
              value={formik.values.job}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="dateOfJoining"
              className="block text-sm font-medium text-gray-700"
            >
              Date Of Joining
            </label>
            <input
              id="dateOfJoining"
              type="date"
              name="dateOfJoining"
              required
              onChange={formik.handleChange}
              value={formik.values.dateOfJoining}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalDetails;