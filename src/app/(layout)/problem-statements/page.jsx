import React from "react";
import Card from "@/app/(layout)/home1/_components/Card";
import { cardData } from "@/lib/data/cardData";
import { TextAnimate } from "@/components/ui/text-animate";
import { GridPatternHero } from "../home/_components/GridPatternHero";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Full-page background */}
      <GridPatternHero />

      {/* Content */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full flex items-center justify-center p-20">
          <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-2xl md:text-4xl lg:text-7xl capitalize text-white">
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="font-general font-bold !text-7xl text-hack-100"
            >
              Problem Statements
            </TextAnimate>
          </h1>
        </div>
        <div className="p-10 rounded-t-3xl w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
            {cardData.map((card, index) => (
              <div key={`${card.id}-${index}`} className="flex justify-center">
                <Card
                  variant={"primary"}
                  title={card.title}
                  subtitle={card.description}
                  index={card.id}
                  imgUri={card.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
