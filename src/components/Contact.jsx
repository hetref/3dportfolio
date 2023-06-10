import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hcds1on",
        "template_4lvc3gf",
        {
          from_name: form.name,
          to_name: "Aryan Shinde",
          from_email: form.email,
          to_email: "shindearyan179@gmail.com",
          message: form.message,
        },
        "sWSGeQspNkkT6Ru87"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for contacting me!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Oops! Something went wrong!");
        }
      );
  };

  return (
    <div id="contact">
      <div className="h-[80px]" />
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-100 p-8 rounded-2xl"
          // className="xl:flex-1 xl:h-auto md:h-[550px] h- [350px]"
        >
          <p className={styles.heroSubText}>Get in touch</p>
          <h3 className={styles.heroHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium border-2 border-[#ffffff99]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium border-2 border-[#ffffff99]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={8}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium border-2 border-[#ffffff99] resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none border-2 border-[#ffffff99] w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending ..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {/* {loadingStatus &&  */}
          <EarthCanvas />
          {/* } */}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
