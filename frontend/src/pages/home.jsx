import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Nav from "@/components/layout/nav";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black" >
        <Nav />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
