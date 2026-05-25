import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="items-center justify-between flex flex-col w-full min-h-screen bg-linear-to-r to-black from-slate-900 ">
      <Nav />
      <main className="w-full h-[80vh] flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
