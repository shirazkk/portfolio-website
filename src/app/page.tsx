import Image from "next/image";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Footer from "./footer";


export default function Home() {
  return (
    <div>
      <main className="bg-slate-200 flex w-full h-screen ">
        {/* left-section */}
        <div className=" w-2/4 flex justify-center items-center" id="left">
          <div className="w-10/12 h-3/4 relative top-20 p-5">
            <h1 className="py-3 text-5xl font-bold ">Hello, I'm Shiraz Ali</h1>
            <h3 className="py-2 text-3xl font-semibold">Front-End Developer</h3>
            <p className="text-lg ">
              As a Front-End Developer, I craft user-friendly web interfaces
              with expertise in HTML, CSS, and JavaScript, ensuring sites are
              both visually appealing and highly functional.
            </p>
            <button className="py-2 px-4 my-3  bg-black text-white rounded-md">
              Hire Me
            </button>
          </div>
        </div>

        {/* right-section */}
        <div className=" w-2/4 h-full flex items-center justify-center" id="right">
        
          <Image
            className=" object-center rounded-full"
            width={400}
            height={400}
            src="/assist/profile.jpeg"
            alt="Profile Image"
          />
        </div>
      </main>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
