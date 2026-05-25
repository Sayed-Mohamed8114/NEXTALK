import Button from "@/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loaderapp from "../Loaderapp";
import SoftAurora from "@/ui/SoftAurora";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/signup");
    }, 2000);
  };
  if (loading) {
    return <Loaderapp />;
  }

  return (
    <section className="relative w-full h-full overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <SoftAurora />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-10">
        <h1 className="text-6xl font-bold font-mono">Welcome to NexTalk</h1>
        <p className="mt-4 max-w-2xl text-xl font-serif opacity-90 text-slate-100/90 ">
          Chat and talk with your people in one place with amazing services and
          an excellent support team
        </p>

        <div className="flex items-center justify-between gap-5">
          {loading ? (
            <Loaderapp />
          ) : (
            <Button
              content={"Get Started"}
              flag={true}
              onclick={handleSignup}
            />
          )}

          <Button content={"Learn more"} flag={false} />
        </div>
      </div>
    </section>
  );
}
