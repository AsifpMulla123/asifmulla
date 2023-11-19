import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
        "service_lw70cbj",
        "template_ieseyy1",
        {
          from_name: form.name,
          to_name: "Asif",
          from_email: form.email,
          to_email: "asifmullaofficial@gmail.com",
          message: form.message,
        },
        "Rsor1a4DHETZU7Qv1"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you,I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("something went wrong");
        }
      );
  };

  return (
    <div
      data-aos="fade-right" data-aos-delay="30ms"
      className="mb-4 p-6 rounded-xl bg-slate-800 flex flex-col bg-clip-border mt-4"
      id="contact"
    >
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider ml-4 mr-4">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ml-4 mr-4">
            Contact
          </h3>
          <form
            ref={formRef}
            className="mt-12 flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your name?"
                className="py-4 px-6 bg-tertiary placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your email?"
                className="py-4 px-6 bg-tertiary placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do You want to say?"
                className="py-4 px-6 bg-tertiary placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl w-fit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
