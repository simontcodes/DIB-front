import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen flex w-full mt-4 pl-60 pr-60 rounded-sm">
      <aside className="w-1/6 bg-emerald-900 h-screen flex flex-col justify-center rounded-3xl">
        <p className="text-white text-3xl font-medium m-10">Left Panel</p>
        <div className="w-full p-10 bg-white rounded-lg shadow-lg">
          <p className="text-lg font-medium text-gray-800">Example 1</p>
        </div>
        <div className="w-full p-10 bg-white rounded-lg shadow-lg mt-10">
          <p className="text-lg font-medium text-gray-800">Example 2</p>
        </div>
      </aside>
      <main className="w-5/6 bg-emerald-500 h-screen flex flex-col items-center justify-center rounded-3xl">
        <h1 className="text-3xl font-bold text-white">
          Welcome to the Dashboard
        </h1>
        <p className="text-white">
          This is a template dashboard built with Next.js and Tailwind CSS
        </p>
        <div className="w-full mt-10 p-10 bg-white rounded-lg shadow-lg">
          <p className="text-lg font-medium text-gray-800">
            Your Content Goes Here
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
