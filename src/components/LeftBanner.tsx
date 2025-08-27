import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaReact,
  FaDownload,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["UI Designer.", "Intégrateur Web.", "Développeur Frontend."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">BIENVENUE DANS MON UNIVERS</h4>
        <h1 className="text-3xl font-bold text-white">
          Bonjour, je suis{" "}
          <span className="text-designColor capitalize">
            RAKOTONDRARIVO Florentino Elisé
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Spécialisé en front-end moderne, je conçois des applications web
          réactives et élégantes, alliant performance, animations et ergonomie
          grâce à React.js, Vite et Tailwind.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Retrouvez-moi dans
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/rakotondrarivo-florentino-elis%C3%A9-2815a5326/?otpToken=MTMwNjE2ZTAxYjI2Y2NjNWIxMmQwZmViNDExYmUxYjU4YmNkZDE0MDliYTc4NzZhN2JjZTAyNjc0ZjViNTRmNGY3ZDNkZGU5MWFmMmM0ODcwMjg4Y2FiMDM2MWJjZDA3ZmI4NTg1OTgyMDI1OGVkMDAzNzg1ODJlLDEsMQ%3D%3D&midSig=2TcpIVCFUXDbU1&eid=mu7ayp-mere0jn7-ru&midToken=AQESOj6NMCcFJw&trkEmail=eml-email_network_conversations_01-header-0-profile_glimmer-null-mu7ayp%7Emere0jn7%7Eru-null-null&trk=eml-email_network_conversations_01-header-0-profile_glimmer&originalSubdomain=mg"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100077445182924"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="/CV-AKOTONDRARIVO-Florentino-Elisé.pdf"
              download="CV-AKOTONDRARIVO-Florentino-Elisé.pdf"
              className="relative group inline-block"
            >
              <span className="bannerIcon">
                <FaDownload />
              </span>
              <span className="absolute top-16 -translate-x-1/2 px-2 py-1 text-sm text-white 
              bg-black/25 hover:text-designColor rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Télécharger CV
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            MEILLEURES COMPÉTENCES
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
