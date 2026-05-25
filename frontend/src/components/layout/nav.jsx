import Button from "@/ui/button";
import { useNavigate } from "react-router-dom";

export default function Nav({setLoading}) {
  const navigate = useNavigate();
  const returnHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  const handleLogin=()=>{
    setLoading(true);
    setTimeout(()=>{
      navigate('/login');
      setLoading(false);
    },1500)
  }


  return (
    <nav className="h-[8vh] mt-4 px-5  w-[80%] max-w-7xl  text-white bg-white/7.5 rounded-2xl backdrop-blur-md  flex items-center justify-between">
      <button
        onClick={returnHome}
        className="font-extrabold font-mono text-3xl bg-linear-to-r from-slate-100 cursor-pointer to-slate-500 bg-clip-text text-transparent "
      >
        NexTalk
      </button>
      <div className="flex items-center justify-between gap-5 ">
      <h5 className="text-2xl bg-linear-to-l font-serif from-slate-100 to bg-slate-500 bg-clip-text text-transparent">Chat became easy</h5>
        <Button content={"have an account?"} flag={true} onclick={handleLogin}/>
      </div>
    </nav>
  );
}
