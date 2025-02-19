"use client";
import React from "react";
import { SelectTheme } from "./theme-toggle";
import CurrentWork from "./current-work";
import { Button } from "./ui/button";
//  import { img2 } from "@/app/constants/image"

export default function Top() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <header className="grid grid-cols-4 p-5 w-full items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-2 col-span-3">
          <h4 className="text-foreground/60">Hi there! This is</h4>
          <div>
          <div className="flex items-center gap-4">
            <h1 className="text-5xl font-extrabold">Sadaf</h1>
            <SelectTheme />
          </div>
          {/* Right Side: Profile Image */}
        {/* <div className="col-span-1 flex justify-center">
          <img
            src={img2.src}
            alt="Sadaf"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg mt-2"
          />
        </div> */}
          
          </div>

          <p className="text-foreground/60">
          Hi! I’m Sadaf, a Full Stack Developer and Computer Science student at NMIT, Bengaluru. I specialize in Next.js, React.js, Docker, Redis, MongoDB, and PostgreSQL while continuously exploring new technologies. Passionate about problem-solving, DSA, and building scalable applications, I thrive in collaborative environments. I love coding competitions and hackathons, always eager to learn, grow, and create impactful tech solutions. Let’s connect and build something amazing! 🚀
          </p>

          <CurrentWork />

          <aside className="flex items-center gap-2 mt-4">
            <Button
              className="h-8 shadow-xl shadow-primary/10 font-extrabold dark:shadow-primary/40"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
            <Button
              className="h-8 text-sm font-semibold"
              onClick={() => scrollToSection("contact")}
              variant={"ghost"}
            >
              Contact me
            </Button>
            {/* <a href={"/Resume-updated.pdf"} target="_blank">
          <FileUser />
        </a> */}
        <Button className="h-8 shadow-xl shadow-primary/10 font-extrabold dark:shadow-primary/40">
        <a href={"/Resume-updated.pdf"} target="_blank">
        Resume
        </a> 
        </Button>

          </aside>
         
        </div>

        
      </header>
    </>
  );
}