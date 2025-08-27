import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Langues from "./Langues";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  const [languesData, setLanguesData] = useState<Boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="Expériences professionnelles" des="Mes Parcours" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setLanguesData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Formation
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setLanguesData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Compétences professionnelles
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setLanguesData(false);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Expériences professionnelles
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setLanguesData(true);
              }}
              className={`${
                languesData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Langues
            </li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {languesData && <Langues />}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
