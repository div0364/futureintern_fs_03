import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported

const baseURL = "http://localhost:5000";

const ModalDetails = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false);

  const createEmployee = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Ensure values are sent as JSON
      });
      console.log(res);
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      job: "",
      dateOfJoining: "",
      image: "",
    },
    onSubmit: (values) => {
      createEmployee(values);
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">New Employee Details</h2>
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
              type="text"
              name="dateOfJoining"
              required
              onChange={formik.handleChange}
              value={formik.values.dateOfJoining}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Saving..." : "Save Details"}
            </button>
            <Link to="/" className="w-full">
              <button
                type="button"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Go to Home Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDetails;
