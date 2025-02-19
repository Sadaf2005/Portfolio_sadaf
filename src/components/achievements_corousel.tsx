"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { achievementData } from "@/app/achievementdata";

export function AchievementCarousel() {
  return (
    <Carousel className="w-full p-6">
      <CarouselContent>
        {achievementData.map((item, index) => (
          <CarouselItem className="md:basis-1/2" key={index}>
            <div className="p-4 rounded-xl relative h-[25rem] border-2">
              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm text-foreground/70">{item.event}</p>
                <Button
                  className="h-7  font-bold text-xs"
                >
                  {item.date}
                </Button>
                </div> 
                <Image
                className={`w-[20rem] aspect-video rounded-xl object-cover absolute shadow-lg shadow-${item.bgColor} bottom-10 left-[50%] translate-x-[-50%]`}
                width={400}
                height={400}
                src={item.image}
                alt={item.name}
              />
           
                
             
             
            </div>
           
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-4 mt-8 justify-end">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
