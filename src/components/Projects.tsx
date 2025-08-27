import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="Découvrez mes projets et partagez vos retours"
            des="Mes Projets"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Sooatel Restaurant - Gestion numérique (Freelance, 2023)"
            des="Développement d'une solution interne en React.js + Vite pour la gestion 
            complète du restaurant, incluant la gestion des commandes, du stock, des menus, de la caisse et des réservations."
            src={projectOne}
          />
          <ProjectsCard
            title="Stage découverte - Pulse (Septembre 2023)"
            des="Immersion professionnelle pour découvrir le fonctionnement d’une entreprise tech."
            src={projectTwo}
          />
          <ProjectsCard
            title="Stage découverte - Vivetic Groupe (Septembre 2022)"
            des="Découverte des étapes de facturation, du reporting, ainsi que du travail en équipe et des méthodes d’organisation."
            src={projectThree}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
