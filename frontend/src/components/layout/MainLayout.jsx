import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div className="items-center justify-between flex flex-col w-full min-h-screen bg-black ">
      <Nav />
      <main className="w-full h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
