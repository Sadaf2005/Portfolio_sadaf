"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import {
    aws,
    nptel,
    dbms,
}from "@/app/constants/image";

// Sample certification data
const certifications = [
  {
    name: "AWS Academy Cloud Foundations",
    image: aws, // Update with your actual image path
    link: "https://drive.google.com/file/d/1Li8gE6VoPlAsp80saFqjVsP13OZ43OQU/view?usp=sharing",
    certifiedBy:"AWS Academy",
  },
  {
    name: "Operating System Fundamentals",
    image:nptel,
    link: "https://drive.google.com/file/d/1XZEmE5mur8ev0O3Snjw5IGw-2iT7RMvX/view?usp=sharing",
    certifiedBy:"NPTEL",
  },
  {
    name: "Database Management System ",
    image: dbms,
    link: "https://drive.google.com/file/d/1AfE00KD5ED0YH8fp0nbuvaNoA0ZtJkn-/view?usp=sharing",
    certifiedBy:"Infosys SpringBoard",
  },
];

export default function Certifications() {
  return (
    <section className="w-full py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="p-4 border rounded-xl shadow-lg flex flex-col items-center bg-card">
            {/* Certification Image */}
            <p className="text-sm text-foreground/70">{cert.name}</p>
            <div className="w-full h-40 relative">
           
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          
            
            {/* Certification Button */}
            <Button
              className="mt-4 font-semibold"
              onClick={() => window.open(cert.link, "_blank")}
            >
              View Certification
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
