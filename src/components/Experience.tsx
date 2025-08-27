import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Expériences Professionnelles
          </h2>
        </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black 
        border-opacity-30 flex flex-row flex-wrap justify-between gap-6">
          <ResumeCard
            title="Développeur Freelance"
            subTitle="Sooatel Restaurant (2023)"
            result="Projet Réel"
            des="Développement d'une solution interne en React.js + Vite pour la gestion complète du restaurant, incluant la gestion des commandes, du stock, des menus, de la caisse et des réservations."
          />

          <ResumeCard
            title="Stage découverte"
            subTitle="Pulse (2023)"
            result="Immersion"
            des="Découverte du monde professionnel et participation à des missions liées aux services numériques et au développement."
          />
          <ResumeCard
            title="Stage découverte"
            subTitle="Vivetic Groupe (2022)"
            result="Immersion"
            des="Première immersion dans une entreprise spécialisée dans l’externalisation, découverte des métiers du digital et de l’informatique."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
