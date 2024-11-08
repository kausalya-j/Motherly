import React from "react";
import Sidebar from "../sidebar";

function Stories() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4 flex flex-col items-center justify-center px-8 py-4">
        <h1 className="font-bold text-3xl mb-4">Stories Section</h1>
        <p className="text-lg">Content related to stories goes here.</p>
      </div>
    </div>
  );
}

export default Stories;
