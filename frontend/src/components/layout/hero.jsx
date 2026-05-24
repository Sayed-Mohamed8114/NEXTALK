import Button from "@/ui/button";
import SoftAurora from "@/ui/SoftAurora";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <SoftAurora />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-10">
        <h1 className="text-6xl font-bold font-mono">
          Welcome to NexTalk
        </h1>

        <p className="mt-4 max-w-2xl text-lg opacity-90">
          Chat and talk with your people in one place with amazing services and
          an excellent support team
        </p>

        <div className="flex items-center justify-between gap-5">
          <Button content={'welcome to our app'} flag={false} />
          <Button content={'Get Started'} flag={true} onclick={()=> navigate("/signup")}/>
        </div>
      </div>
    </section>
  );
}