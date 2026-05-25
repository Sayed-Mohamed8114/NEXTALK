import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/login";

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

    return <RouterProvider router={router}/>;
}

export default App
