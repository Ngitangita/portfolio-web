import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Frontend */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Frontend</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: "HTML", level: "95%" },
            { name: "CSS", level: "90%" },
            { name: "Tailwind CSS", level: "90%" },
            { name: "JavaScript", level: "60%" },
            { name: "React.js", level: "75%" },
            { name: "Next.js", level: "60%" },
            { name: "TypeScript", level: "65%" },
            { name: "Figma", level: "55%" },
          ].map((skill, index) => (
            <div key={skill.name} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Outils */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Outils</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: "GitHub", level: "85%" },
            { name: "Google Workspace", level: "90%" },
            { name: "Canva", level: "80%" },
            { name: "Word", level: "95%" },
            { name: "Excel", level: "75%" },
            { name: "PowerPoint", level: "90%" },
          ].map((skill, index) => (
            <div key={skill.name} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
