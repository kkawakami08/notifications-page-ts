import React from "react";

export default function Nav() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <h1 className="font-extrabold text-2xl">Notifications</h1>
        <div className="bg-blue-900 text-white font-extrabold text-lg w-10 flex items-center justify-center rounded-lg">
          <p>3</p>
        </div>
      </div>
      <p className="text-grayishBlue">Mark all as read</p>
    </div>
  );
}
