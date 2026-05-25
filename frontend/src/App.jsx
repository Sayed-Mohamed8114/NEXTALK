import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/login";
import { useEffect, useState } from "react";
import Loaderapp from "./components/Loaderapp";

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/> ,

    children: [
      {
        index:true , 
        element:<Home/> ,
      },
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'signup',
        element:<SignUp/>
      },
    ],
  },
])

function App() {

  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },1000);
    return () => clearTimeout(timer);
  },[]);
  if(loading){
    return <Loaderapp bg={"bg-linear-to-r to-black from-slate-900"}/>
  }
    return <RouterProvider router={router}/>;
}

export default App
