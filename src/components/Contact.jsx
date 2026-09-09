import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import backgroundImg from "../assets/images/background.webp";

const CONTACT_INFO = [
  {
    icon: "https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=FFFFFF",
    label: "phone",
    value: "+62 85111442235",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=86862&format=png&color=FFFFFF",
    label: "email",
    value: "13523147@std.stei.itb.ac.id",
  },
  {
    icon: "https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF",
    label: "location",
    value: "Jalan Ganesa 10, Bandung, Indonesia",
  },
];

const toastStyle = { style: { backgroundColor: "#303030", color: "#fff" } };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isValid() {
    if (!name || !email || !message) {
      toast.error("Invalid inputs", toastStyle);
      return false;
    }
    return true;
  }

  function handleForm(e) {
    e.preventDefault();
    if (!isValid()) return;

    setIsSubmitting(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/13523147@std.stei.itb.ac.id", {
        name,
        email,
        message,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Message Sent Successfully", toastStyle);
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch(() => toast.error("Unable to send message", toastStyle))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <>
      <div>
        <Toaster />
      </div>

      <h1
        id="contact"
        className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]"
      >
        Contact Me
      </h1>

      <section
        className="w-5/6 rounded-xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <div className="sm:p-16 p-6 mx-auto mb-24">
          <div className="pb-8 text-center">
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              Love to hear from you,
            </h1>
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              Get in touch 👋
            </h1>
          </div>

          {/* Liquid glass panel */}
          <div
            className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] grid-cols-1 gap-8
                       rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl
                       shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-6 sm:p-10"
          >
            {/* Contact info sidebar */}
            <div className="flex flex-col justify-center gap-6">
              <h3 className="text-primary text-2xl font-bold">
                Drop me a message
              </h3>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20">
                      <img
                        className="w-5 h-5"
                        src={item.icon}
                        alt={item.label}
                      />
                    </span>
                    <span className="text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form id="form" onSubmit={handleForm}>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4 w-full">
                <div>
                  <label className="text-primary font-semibold">
                    Your Name
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full text-black rounded-md h-10 px-2 mt-1 bg-white/90"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-primary font-semibold">
                    Email Address
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full text-black rounded-md h-10 px-2 mt-1 bg-white/90"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </label>
                </div>
              </div>

              <div className="py-4">
                <label className="text-primary font-semibold">
                  Message
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-black rounded-md h-28 p-2 mt-1 bg-white/90"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-md bg-white font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
