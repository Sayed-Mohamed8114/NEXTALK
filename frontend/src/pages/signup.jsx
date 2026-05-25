import Loaderapp from "@/components/Loaderapp";
import Button from "@/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();
    const [loading , setLoading] = useState();
    const handleSignin=()=>{
        setLoading(true);
        setTimeout(() => {
            navigate("/login");
        }, 1500);
    }

    if(loading){
        return <Loaderapp/>
    }
  return (
    <form className="flex flex-col gap-3.5 w-[50%] p-5 rounded-2xl relative bg-transparent text-white  border-[#333]">
      
      <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-7.5 text-slate-400">
        <span className="absolute left-0 w-4 h-4 rounded-full bg-slate-700"></span>

        <span className="absolute left-0 w-4 h-4 rounded-full bg-slate-400 animate-ping"></span>

        <p className="bg-linear-to-r from-slate-500 to-slate-400 font-bold text-transparent bg-clip-text">Register</p>
      </p>

      <p className="text-[14.5px] text-white/70">
        Signup now and get full access to our app.
      </p>

      <div className="flex w-full gap-2">
        <label className="relative w-full">
          <input
            type="text"
            required
            placeholder=" "
            className="peer bg-slate-950 text-white w-full pt-5 pb-1 px-2.5 outline-none border border-white/20 rounded-[10px]"
          />

          <span className="absolute left-2.5 top-3 text-[0.9em] text-white/50 transition-all duration-300 
          peer-placeholder-shown:top-3 
          peer-placeholder-shown:text-[0.9em]
          peer-focus:top-0 
          peer-focus:text-[0.7em]
          peer-focus:text-salte-300
          peer-focus:font-semibold
          peer-valid:top-0
          peer-valid:text-[0.7em]
          peer-valid:text-slate-300
          peer-valid:font-semibold">
            Firstname
          </span>
        </label>

        <label className="relative w-full">
          <input
            type="text"
            required
            placeholder=" "
            className="peer bg-slate-950 text-white w-full pt-5 pb-1 px-2.5 outline-none border border-white/20 rounded-[10px]"
          />

          <span className="absolute left-2.5 top-3 text-[0.9em] text-white/50 transition-all duration-300 
          peer-placeholder-shown:top-3
          peer-focus:top-0
          peer-focus:text-[0.7em]
          peer-focus:text-slate-300
          peer-focus:font-semibold
          peer-valid:top-0
          peer-valid:text-[0.7em]
          peer-valid:text-slate-300
          peer-valid:font-semibold">
            Lastname
          </span>
        </label>
      </div>

      <label className="relative">
        <input
          type="email"
          required
          placeholder=" "
          className="peer bg-slate-950 text-white w-full pt-5 pb-1 px-2.5 outline-none border border-white/20 rounded-[10px]"
        />

        <span className="absolute left-2.5 top-3 text-[0.9em] text-white/50 transition-all duration-300 
        peer-placeholder-shown:top-3
        peer-focus:top-0
        peer-focus:text-[0.7em]
        peer-focus:text-slate-300
        peer-focus:font-semibold
        peer-valid:top-0
        peer-valid:text-[0.7em]
        peer-valid:text-slate-300
        peer-valid:font-semibold">
          Email
        </span>
      </label>

      <label className="relative">
        <input
          type="password"
          required
          placeholder=" "
          className="peer bg-slate-950 text-white w-full pt-5 pb-1 px-2.5 outline-none border border-white/20 rounded-[10px]"
        />

        <span className="absolute left-2.5 top-3 text-[0.9em] text-white/50 transition-all duration-300 
        peer-placeholder-shown:top-3
        peer-focus:top-0
        peer-focus:text-[0.7em]
        peer-focus:text-slate-300
        peer-focus:font-semibold
        peer-valid:top-0
        peer-valid:text-[0.7em]
        peer-valid:text-slate-300
        peer-valid:font-semibold">
          Password
        </span>
      </label>

      <label className="relative">
        <input
          type="password"
          required
          placeholder=" "
          className="peer bg-slate-950 text-white w-full pt-5 pb-1 px-2.5 outline-none border border-white/20 rounded-[10px]"
        />

        <span className="absolute left-2.5 top-3 text-[0.9em] text-white/50 transition-all duration-300 
        peer-placeholder-shown:top-3
        peer-focus:top-0
        peer-focus:text-[0.7em]
        peer-focus:text-slate-300
        peer-focus:font-semibold
        peer-valid:top-0
        peer-valid:text-[0.7em]
        peer-valid:text-slate-300
        peer-valid:font-semibold">
          Confirm password
        </span>
      </label>

        <Button content={"Submit"} flag={true}/>

      <p className="text-center text-[14.5px] text-white/70">
        Already have an account?{" "}
        <button onClick={handleSignin}>
         <a
          href="#"
          className="text-slate-50 hover:underline"
        >
          Signin
        </a>
        </button>
      </p>
     
    </form>
  );
}