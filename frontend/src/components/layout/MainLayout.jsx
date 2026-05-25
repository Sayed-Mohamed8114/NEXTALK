import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import { useState } from "react";
import Loaderapp from "../Loaderapp";

export default function MainLayout() {
  const [loading , setLoading] = useState(false);

  return (
    <div className="items-center justify-between overflow-y-hidden flex flex-col w-full h-screen bg-linear-to-r to-black from-slate-900 ">
      {
        loading&& (
          <div className="bg-linear-to-r w-full h-screen from-slate-950 to-black">
            <Loaderapp />
          </div>
        )
      }
      <Nav setLoading={setLoading} />
      <main className="w-full h-[80vh] flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
