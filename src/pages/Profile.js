import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { BiMessage } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  // getting single user using context
  const userInfo = useContext(UserContext);

  return (
    <div className="mt-14 mr-10">
      <div className="flex justify-between">
        <h3 className="text-2xl">Profile</h3>
        <div className="flex">
          <img
            onClick={() => setOpen(!open)}
            className="rounded-full w-10 h-10 cursor-pointer"
            src={userInfo.singleUser[0]?.profilepicture}
            alt="profile pic"
          />
          <div className="flex items-center">
            <p className="px-5">{userInfo.singleUser[0]?.name}</p>
          </div>
          {open && (
            <div className="absolute gap-3 pb-5 flex justify-center text-center flex-col rounded-3xl bg-gray-100 w-72 h-auto right-16 top-[100px]">
              <img
                className="rounded-full ml-24 w-20 h-20 mt-5"
                src={userInfo.singleUser[0]?.profilepicture}
                alt="profile pic"
              />
              <p className="">{userInfo.singleUser[0]?.name}</p>
              <p className="text-gray-400">{userInfo.singleUser[0]?.email}</p>
              <hr className="mx-5" />
              <div className="flex justify-center px-9">
                <img
                  className="rounded-full w-10 h-10"
                  src={userInfo.users[6]?.profilepicture}
                  alt="profile pic"
                />
                <div className="pl-2 flex items-center">
                  <p className="px-1">{userInfo.users[6]?.name}</p>
                </div>
              </div>
              <hr className="mx-5" />

              <div className="flex justify-center">
                <p
                  onClick={handleLogout}
                  className="px-1 py-2 w-32 rounded-3xl bg-red-500 text-gray-50  hover:bg-red-400 cursor-pointer"
                >
                  Signout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-5" />
      {userInfo.singleUser.length>0?
    <div>
    <div className="flex justify-center gap-20 flex-row">
      <div className="mt-10 w-1/2 text-slate-700 flex pl-20 pr-2 justify-center flex-col border-r-2">
        <img
          className="rounded-full w-48 h-48"
          src={userInfo.singleUser[0]?.profilepicture}
          alt="profile pic"
        />
        <p className="px-5 text-slate-700 mt-4 font-bold text-xl">
          {userInfo.singleUser[0]?.name}
        </p>
        <div className="flex pl-0  flex-col text-xl justify-center gap-3">
          <p className="mt-3">
            <span className="text-gray-400 inline-block text-lg w-30 pr-0 text-right">
              Username :
            </span>{" "}
            {userInfo.singleUser[0]?.username}
          </p>
          <p>
            <span className="text-gray-400  inline-block w-30 pr-0 text-lg text-right">
              Email :
            </span>{" "}
            {userInfo.singleUser[0]?.email}
          </p>
          <p>
            <span className="text-gray-400  inline-block w-30 text-lg text-right">
              Phone :
            </span>{" "}
            {userInfo.singleUser[0]?.phone}
          </p>
          <p>
            <span className="text-gray-400  inline-block w-30 text-lg text-right">
              Website :
            </span>{" "}
            {userInfo.singleUser[0]?.website}
          </p>
          <hr className="mt-5 mr-20" />
          <p className="px-5 ml-10  text-slate-400">Company</p>
          <p>
            <span className="text-gray-400 text-lg">Name :</span>{" "}
            {userInfo.singleUser[0]?.company.name}
          </p>
          <p className="w-96 text-left">
            <span className="text-gray-400 text-lg">catchphrase :</span>{" "}
            {userInfo.singleUser[0]?.company.catchPhrase}
          </p>
          <p>
            <span className="text-gray-400 text-lg">Bs :</span>{" "}
            {userInfo.singleUser[0]?.company.bs}
          </p>
        </div>
      </div>

      <div className="mt-10  w-2/3 flex justify-start flex-col">
        <h6 className="text-xl pb-3 text-gray-400">Address :</h6>
        <div className="pl-10 flex flex-col gap-3">
          <p className="text-slate-700 text-xl">
            <span className="text-gray-400 text-lg">Street :</span>{" "}
            {userInfo.singleUser[0]?.address.street}
          </p>
          <p className="text-slate-700 text-xl">
            <span className="text-gray-400 text-lg">Suite :</span>{" "}
            {userInfo.singleUser[0]?.address.suite}
          </p>
          <p className="text-slate-700 text-xl">
            <span className="text-gray-400 text-lg">City :</span>{" "}
            {userInfo.singleUser[0]?.address.city}
          </p>
          <p className="text-slate-700 text-xl">
            <span className="text-gray-400 text-lg">Zipcode :</span>{" "}
            {userInfo.singleUser[0]?.address.zipcode}
          </p>
        </div>

        {/* geo map using iframe */}
        <div>
          <iframe
            title="Geo Map"
            className="rounded-3xl mt-5"
            src={`http://maps.google.com/?q=${userInfo.singleUser[0]?.address.geo.lat},${userInfo.singleUser[0]?.address.geo.lng}&hl=es,&output=embed`}
            height="300px"
            width="470px"
          />
        </div>

        {/* chat box  */}
        <div
          className={`absolute  border-blue-900 border-[.7px]  right-28  bottom-0 ${
            openChat ? "h-80" : "h-10"
          } bg-gray-100 overflow-y-scroll rounded-t-2xl`}
        >
          <div
            onClick={() => setOpenChat(!openChat)}
            className="flex fixed items-left text-lg justify-between cursor-pointer py-2 text-white px-5 rounded-t-xl bg-blue-700  w-72"
          >
            <div className="flex  items-center gap-2">
              <div className="mt-1">
                <BiMessage />
              </div>
              <p>chats</p>
            </div>
            <div className={`cursor-pointer mt-1`}>
              {openChat ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
          <div>
            <div className="px-[9px] pt-10 ">
              {userInfo.users?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between mt-5 cursor-pointer"
                  >
                    <div className="flex justify-start items-start">
                      <img
                        className="rounded-full w-10 h-10 cursor-pointer"
                        src={item.profilepicture}
                        alt="profile pic"
                      />
                      <div className="flex items-center">
                        <p className="px-5 pt-2">{item.name}</p>
                      </div>
                    </div>
                    <div className="w-2 flex pr-0 mb-4 h-2 mt-3  border-gray-500 bg-green-500 rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>:<div className="text-center mt-80 text-[57px] text-gray-300">Please try again later</div>
    }
    </div>
  );
}
