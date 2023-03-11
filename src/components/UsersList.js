import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import Card from "./Card";

export default function UsersList() {
  // to get the users data from context
  const usersInfo = useContext(UserContext);

 


  return (
    <div>
      <div className="card-height w-2/5   text-center  bg-gray-50  overflow-y-scroll shadow-2xl rounded-3xl">
        <p className="px-5 text-2xl py-10 tracking-widest bg-gray-200 fixed z-10  w-2/5 text-gray-500  rounded-t-3xl">
          Select an account
        </p>
        <div className="mt-36">
          {usersInfo.users.map((user,index) => {
            return (
              <Card key={index}  profilepicture={user.profilepicture} name={user.name} handleUser={usersInfo.handleUser} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
