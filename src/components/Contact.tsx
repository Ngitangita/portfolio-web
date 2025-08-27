import { useState } from "react";
import axios from "axios";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  const validationEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const envoyerMessage = async (e: any) => {
    e.preventDefault();

    if (nom === "") {
      setErreur("Le nom est requis !");
    } else if (telephone === "") {
      setErreur("Le numéro de téléphone est requis !");
    } else if (email === "") {
      setErreur("Veuillez fournir votre email !");
    } else if (!validationEmail(email)) {
      setErreur("Veuillez fournir un email valide !");
    } else if (sujet === "") {
      setErreur("Veuillez indiquer le sujet !");
    } else if (message === "") {
      setErreur("Le message est requis !");
    } else {
      try {
        const url = import.meta.env.VITE_BASE_URL + "/send "
        const res = await axios.post(url, {
          nom,
          telephone,
          email,
          sujet,
          message,
        });

        if (res.data.success) {
          setSucces(`Merci ${nom}, votre message a été envoyé avec succès !`);
          setErreur("");
          setNom("");
          setTelephone("");
          setEmail("");
          setSujet("");
          setMessage("");
        }
      } catch (err) {
        setErreur("Erreur lors de l'envoi de l'email.");
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contactez-moi" />
        </div>

        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />

            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {erreur && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {erreur}
                  </p>
                )}
                {succes && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {succes}
                  </p>
                )}

                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Nom
                    </p>
                    <input
                      onChange={(e) => setNom(e.target.value)}
                      value={nom}
                      className={`${
                        erreur === "Le nom est requis !" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>

                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Téléphone
                    </p>
                    <input
                      onChange={(e) => setTelephone(e.target.value)}
                      value={telephone}
                      className={`${
                        erreur === "Le numéro de téléphone est requis !" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      erreur === "Veuillez fournir votre email !" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Sujet
                  </p>
                  <input
                    onChange={(e) => setSujet(e.target.value)}
                    value={sujet}
                    className={`${
                      erreur === "Veuillez indiquer le sujet !" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      erreur === "Le message est requis !" &&
                      "outline-designColor"
                    } contactTextArea`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>

                <div className="w-full">
                  <button
                    onClick={envoyerMessage}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
