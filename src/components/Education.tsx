import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Qualité des formations
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black 
        border-opacity-30 flex flex-row flex-wrap justify-between gap-6">
          <ResumeCard
            title="Licence 3 en Informatique"
            subTitle="H.E.I - Haute École d'Informatique, Ivandry (2022 - 2025)"
            result="En cours"
            des="Formation approfondie en informatique, couvrant le développement logiciel, les bases de données, les réseaux et la gestion de projets."
          />
          <ResumeCard
            title="Formation préparatoire en IT & Digital"
            subTitle="Passerelles Numériques Madagascar (2021 - 2022)"
            result="Certificat"
            des="Programme intensif axé sur les fondamentaux du numérique et de l'informatique, incluant programmation, bureautique, anglais et soft skills."
          />
          <ResumeCard
            title="Baccalauréat Série D - Mention Assez Bien"
            subTitle="Lycée Privé Saint Croix, Antsakabary (2021)"
            result="Assez Bien"
            des="Parcours secondaire en sciences expérimentales, avec un accent particulier sur les mathématiques et les sciences naturelles."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
