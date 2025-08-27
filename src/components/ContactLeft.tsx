import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 
    lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          RAKOTONDRARIVO Florentino Elisé
        </h3>
        <p className="text-lg font-normal text-gray-400">
          Développeur Frontend 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaPhone /> <span className="text-lightText">+261 (0) 38 97 165 55 / +261 (0) 38 34 038 49</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 pr-2">
       <FaEnvelope /><span className="text-lightText"> rakotondrelise@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaMapMarkerAlt /> <span className="text-lightText">Lot: Soavimasoandro, Antananarivo 101, Lot II K 14 Ter MAA</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Langues & Réseaux</h2>
        <p className="text-sm flex items-center gap-2">
          <FaGlobe /> Malagasy | Français (B2) | Anglais (A1)
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
    </div>
  );
};

export default ContactLeft;
