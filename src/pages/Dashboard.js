import React from "react";
import BackgroundSvg from "../components/BackgroundSvg";
import UsersList from "../components/UsersList";

export default function Dashboard() {
  return (
    <div>
      <div className="z-10">
        <BackgroundSvg />
      </div>
      <div className="relative">
        <UsersList />
      </div>
    </div>
  );
}
