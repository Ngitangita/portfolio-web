import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Compétences" des="Ce que je fais" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-20">
          <Card
            title="Conception Web & Développement Frontend"
            des="Je crée des interfaces web modernes et réactives en utilisant HTML5, CSS3, 
            Tailwind CSS, JavaScript, React.js, Next.js et TypeScript, alliant performance et
             expérience utilisateur"
            icon={<FaGlobe />}
          />
          <Card
            title="Bureautique & Outils collaboratifs"
            des="Je maîtrise les outils bureautiques et collaboratifs tels que Microsoft Office,
             Google Workspace et Canva pour concevoir, organiser et présenter efficacement des projets."
            icon={<SiAntdesign />}
          />
          <Card
            title="Gestion de versions & Collaboration"
            des="Je gère le versioning et collabore efficacement sur des projets grâce à GitHub, 
            aux pull requests et aux méthodologies de travail collaboratif."
            icon={<SiProgress />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
