import { motion } from "framer-motion";

const Langues = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Profil
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Langues</h2>
        </div>
        <div className="flex flex-row justify-between gap-10 flex-wrap">
          {[
            { name: "Malagasy (langue maternelle)", level: "100%" },
            { name: "Français (B2 - attestation Frantastique, Paris)", level: "80%" },
            { name: "Anglais (A1 - attestation Gymglish, Paris)", level: "30%" },
          ].map((lang, index) => (
            <div key={lang.name} className="overflow-x-hidden w-[550px] h-20 space-y-8">
              <p className="text-sm font-medium">{lang.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ width: lang.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{lang.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Langues;
