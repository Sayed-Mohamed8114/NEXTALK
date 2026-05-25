import Loader from "@/ui/loader";

export default function Loaderapp({ bg }) {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        bg ? bg : "bg-linear-to-r from-slate-900 to-black"
      }`}
    >
      <Loader />
    </div>
  );
}