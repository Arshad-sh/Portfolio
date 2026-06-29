import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");

    // Fetch credentials from environment variables or use placeholders
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_placeholder";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_placeholder";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_placeholder";

    if (serviceId === "service_placeholder" || publicKey === "public_key_placeholder") {
      // Simulate submission success for demonstration/testing
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
    } else {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          publicKey
        )
        .then(
          () => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error("EmailJS Error:", error);
            setStatus("error");
          }
        );
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Let’s Connect & Build Something Amazing 🚀
              </h3>
              <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                I am actively looking for opportunities as a <span className="text-white font-semibold">Frontend Developer</span>, <span className="text-white font-semibold">React Developer</span>, or <span className="text-white font-semibold">SQL Developer</span>. Feel free to reach out for internship opportunities, project collaborations, or full-time roles.
              </p>
            </div>

            {/* Visual contact details list */}
            <div className="flex flex-col gap-4">
              
              {/* Email */}
              <a
                href="mailto:arshadshaikh0564@gmail.com"
                className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-4 border border-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                    Email
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5 truncate max-w-[200px] sm:max-w-none">
                    arshadshaikh0564@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arshad8787/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-4 border border-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <FaLinkedin className="text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                    LinkedIn
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5 truncate">
                    linkedin.com/in/arshad8787
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Arshad-sh"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-4 border border-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <FaGithub className="text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                    GitHub
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5 truncate">
                    github.com/Arshad-sh
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5 shadow-2xl h-full flex flex-col justify-center min-h-[350px]">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center gap-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <FaCheckCircle className="text-5xl text-emerald-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#94A3B8] text-sm max-w-sm">
                      Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 rounded-xl bg-blue-500 px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-600 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-[#0B1120] border border-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-[#0B1120] border border-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Arshad, I'd like to talk about..."
                        className="w-full rounded-xl bg-[#0B1120] border border-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 text-sm transition-all shadow-lg shadow-blue-500/25 disabled:bg-blue-500/50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    {status === "error" && (
                      <p className="text-xs font-semibold text-red-500 mt-2 text-center">
                        Something went wrong. Please email directly.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;