import React, { useState, useRef } from "react";

// This tells TypeScript that the 'emailjs' object will be available globally from the script tag.
declare const emailjs: any;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    // IMPORTANT: Replace these with your actual EmailJS credentials
    // 1. Go to emailjs.com, create an account.
    // 2. Add a new service (e.g., Gmail). Note the SERVICE ID.
    // 3. Create an email template. Note the TEMPLATE ID.
    // 4. Find your PUBLIC KEY in your account settings.
    const serviceID = "service_si3h9g7";
    const templateID = "template_3p1v4pf";
    const publicKey = "hLgOo8UfizRaOrXkr";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("success");
        if (form.current) form.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      },
      (err: any) => {
        console.error("EMAILJS FAILED...", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    );
  };

  const getButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "success":
        return "Message Sent!";
      case "error":
        return "Try Again";
      default:
        return "Send Message";
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case "success":
        return "bg-green-500 hover:scale-100";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gradient-to-r from-pink-500 to-purple-600";
    }
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-2">
            Let’s collaborate to bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`text-white font-bold py-3 px-10 rounded-full text-lg hover:scale-105 transform transition-all duration-300 glow ${getButtonClass()}`}
              >
                {getButtonText()}
              </button>
            </div>
            {status === "success" && (
              <p className="text-center text-green-400 mt-4">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 mt-4">
                Oops! Something went wrong. Please check your EmailJS
                credentials or try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
