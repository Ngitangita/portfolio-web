import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div
      className="w-full py-10 border-t border-gray-700 
      grid grid-cols-1 md:grid-cols-6 gap-8 text-gray-300"
    >
      <div className="md:col-span-2 flex flex-col gap-3">
        <img className="w-24" src={logo} alt="logo" />
        <p className="text-sm">
          RAKOTONDRARIVO Florentino Elisé
          <br />
          Développeur Frontend
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/rakotondrarivo-florentino-elis%C3%A9-2815a5326/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077445182924"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>

      <div className="md:col-span-1">
        <h3 className="font-bold text-designColor">Compétences</h3>
        <ul className="text-sm space-y-1">
          <li>Frontend : React, TS, Tailwind</li>
          <li>Outils : GitHub, Canva, Office</li>
        </ul>
      </div>

      <div className="md:col-span-1">
        <h3 className="font-bold text-designColor">Parcours</h3>
        <ul className="text-sm space-y-1">
          <li>Licence Info - HEI</li>
          <li>Freelance & Stages</li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h3 className="font-bold text-designColor">Contact</h3>
        <p className="text-sm flex items-center gap-2">
          <FaEnvelope /> rakotondrelise@gmail.com
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaPhone /> +261 (0) 38 97 165 55 / +261 (0) 38 34 038 49
        </p>
        <p className="text-sm flex items-center gap-2">
          <FaMapMarkerAlt /> Lot: Soavimasoandro, Antananarivo 101, Lot II K 14
          Ter MAA
        </p>

        <h3 className="font-bold text-designColor mt-2">Langues</h3>
        <p className="text-sm flex items-center gap-2">
          <FaGlobe /> Malagasy | Français (B2) | Anglais (A1)
        </p>
      </div>
    </div>
  );
};

export default Footer;
