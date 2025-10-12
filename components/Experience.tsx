import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Core <span className="text-purple"> Engineering Competencies</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2 h-full">
              <div className="flex lg:flex-row flex-col lg:items-center gap-2 flex-1">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Icon links at the bottom */}
              {(card as any).links && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700/50">
                  {(card as any).links.map((link: any, index: number) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black-200/50 hover:bg-purple/30 border border-slate-700 hover:border-purple flex items-center justify-center transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={link.icon}
                        alt="link icon"
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
