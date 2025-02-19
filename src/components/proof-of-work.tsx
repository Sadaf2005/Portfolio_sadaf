"use client";
import LeetCodeIcon from "@/components/icons/leetcode";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import React  from "react";
import { ProjectCarousel } from "./projects-carousel";
import { AchievementCarousel } from "./achievements_corousel";
import Heading from "./heading";
import Skills from "./skills";
import {leetcode,achievement} from "@/app/constants/image"
import Certifications from "./certifications";

export default function ProofofWork() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   setTheme(localTheme || "light");
  // }, []);

  return (
    <>
    <Skills />
    
      <section className="flex flex-col gap-8 my-5 justify-center mt-16">
      

        <h1 className="text-xl px-6 py-2 border-l-8 border-primary bg-gradient-to-r from-accent dark:from-accent/40 flex items-center gap-2 font-semibold">
          Leetcode Contributions{" "}
          <Link href={"https://leetcode.com/u/Sadaf23o5/"} target="_blank">
            <LeetCodeIcon className="cursor-pointer" />
          </Link>
        </h1>
        <div className="flex  items-center px-6 justify-center">
          {/* <LeetCodeGraph
            username="sadaf2005"
            blockMargin={3}
            colorPallete={[
              theme === "dark" ? "#202020" : "#f4f4f4",
              "#9be9a8",
              "#40c463",
              "#30a14e",
              "#216e39",
            ]}
          /> */}
         <img
          src={leetcode.src}
          alt={"Sadaf's LeetCode Contribution Graph"}
          className="rounded-lg shadow-lg"
          style={{ margin: 2 }}
        />
        </div>
        <div className="flex  items-center px-6 justify-center">
        <img
          src={achievement.src}
          alt={"Sadaf's LeetCode AChievement Graph"}
          className="rounded-lg shadow-lg"
          style={{ margin: 2 }}
        />
        </div>
      </section>
     

      <section id="projects" className="flex flex-col gap-8 mt-16">
        <Heading title="Recent Projects" />

        <article className="">
          <ProjectCarousel />
        </article>
      </section>

      <section id="achievements" className="flex flex-col gap-8 mt-16">
        <Heading title="Achievements" />

        <article className="">
          < AchievementCarousel/>
        </article>
      </section>

      <section id="certifications" className="flex flex-col gap-8 mt-16">
        <Heading title="Certifications" />

        <article className="">
          <Certifications />
        </article>
      </section>

    <section id="certifications" className="flex flex-col gap-8 mt-16">
     <div className="flex items-center gap-4">
           <h1 className="text-xl text-center">Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. –<span className="text-sm text-slate"> Steve Jobs</span> </h1>
           
      </div>
      </section>

    </>
  );
}
