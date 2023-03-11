import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BackgroundSvg from "./components/BackgroundSvg";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";

//  to maintain data in the whole application im using usecontext
export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  
  const [singleUser,setSingleUser] =useState([]);
 console.log(singleUser,"single user")

  // fetching data from the api using axios inside useEffect
  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json").then((res) => {
      setUsers(res.data.users);
    });
  }, []);



  const handleUser=(name) => {
    if(users.length>0){
      setSingleUser(users.filter((user)=>user.name===name))
      // localStorage.setItem('singleUser', JSON.stringify(singleUser));

    }


    }

  // layout for app
  const Layout = () => {
    return(
      <div>
      <Sidebar />
      <div className="ml-[25rem]">
      <Outlet />

      </div>
      </div>
    )
  }


  // setting up the routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/user",
      element: <Layout/>,
      children:[
        {
          path: "/user/profile",
          element: <Profile/>,
        },
        {
          path: "/user/posts",
          element: <Posts />
        },
        {
          path: "/user/gallery",
          element: <Gallery />
        },
        {
          path: "/user/todo",
          element: <Todo />
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <UserContext.Provider value={{users,handleUser,singleUser}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
