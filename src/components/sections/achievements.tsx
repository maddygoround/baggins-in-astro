import React, { useState } from "react";

import Briefcase from "../../assets/svgs/briefcase.svg";
import Lock from "../../assets/svgs/lock.svg";
import Certificate from "../../assets/svgs/certificate.svg";
import Trophy from "../../assets/svgs/trophy.svg";

import { Timestamp } from "../base/timestamp";
import {
  type Achievement as AchievementProps,
  type AchievementType,
  type Achievement,
} from "../../types/achievement";
import { NotionRenderer } from "react-notion";


const AchievementIcon: React.FC<{
  type: AchievementType;
  className?: string;
}> = ({ type, ...props } : {
  type: AchievementType
}) => {
  switch (type) {
    case "award":
      return  <img src={Trophy.src}  {...props} width={Trophy.width} height={Trophy.height} alt="Trophy" aria-label="Trophy" /> ;
    case "education":
      return <img src={Certificate.src} {...props} width={Certificate.width} height={Certificate.height} alt="Education" aria-label="Education" />;
    case "work":
      return <img src={Briefcase.src} {...props}  width={Briefcase.width} height={Briefcase.height} alt="Work" aria-label="Work" />;
    case "security":
      return <img src={Lock.src} {...props} width={Lock.width} height={Lock.height} alt="Security" aria-label="Security" />;
  }
};

const AchievementRow: React.FC<AchievementProps> = ({
  title,
  date,
  endDate,
  type,
  blockMap,
} : AchievementProps) => (
  <div
    className="flex items-center my-8 animate-enter achievement-notion"
    style={{
      animation: "enter 300ms ease-out",
    }}
  >
    <AchievementIcon className="w-10 md:w-24" type={type} />
    <h1 className="flex-1 mx-4">
      <div className="font-semibold">{title}</div>
      <NotionRenderer blockMap={blockMap} />
    </h1>
    <div>
      <Timestamp
        className="border-l pl-2 ml-2"
        date={new Date(date)}
        endDate={new Date(endDate)}
      />
    </div>
  </div>
);

export const Achievements: React.FC<{ achievements: Achievement[] }> = ({
  achievements,
} : { achievements : Achievement[]}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container my-16">
      <div className="m-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Achievements</h1>
        <div className="text-2xl text-gray-600">Things I Have Achieved</div>
        <div className="my-4">
          {achievements
            .filter((a) => showMore || a.highlight)
            .map((a, i) => (
              <AchievementRow key={i} {...a} />
            ))}
        </div>
        <div className="flex justify-center">
          <button
            className="px-2 py-1 text-gray-800 border border-gray-300 rounded shadow-xs"
            data-splitbee-event="Toggle Achievements"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less ↑" : "Show more ↓"}
          </button>
        </div>
      </div>
    </div>
  );
};
