import React, { useState } from "react";
import MainSection from "../components/MainSection/MainSection";
import LeftBar from "../components/LeftBar";

const Dashboard = () => {
  const [employeeId, setEmployeeId] = useState("");

  return (
    <div className="flex h-screen">
      <LeftBar
        employeeId={employeeId}
        className="w-1/4 bg-gray-800 text-white"
      />
      <main className="flex-1 p-4">
        <MainSection setEmployeeId={setEmployeeId} />
      </main>
    </div>
  );
};

export default Dashboard;
