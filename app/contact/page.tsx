"use client";

import { useState } from "react";
import Image from "next/image";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailAddress = "niklas@nordindev.se";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append("access_key", "fde99a5e-31d3-4dfa-a171-90482b88bfbf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      alert("Network error. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 w-full">
      <h1 className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold text-center lg:text-left">
        Contact me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
        
        <div className="space-y-8 max-w-[600px] w-full mx-auto lg:mx-0">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's build something together!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              Whether you have a job opportunity, a project idea, or just want to say hi, 
              feel free to reach out. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-4 text-sm md:text-base">
              <span className="text-xl">📍</span>
              <span>Stockholm, Sweden</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
              <span className="text-xl">✉️</span>
              <a 
                href={`mailto:${emailAddress}`} 
                className="hover:text-brand-orange transition-colors font-medium"
              >
                {emailAddress}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 border border-gray-300 dark:border-neutral-700 rounded-md hover:border-brand-orange dark:hover:border-brand-orange hover:text-brand-orange dark:hover:text-brand-orange transition-all cursor-pointer"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-300 dark:border-neutral-800">
            <p className="text-sm font-semibold dark:text-neutral-500 uppercase tracking-wider mb-4">
              Connect with me
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/niklas-nordin-7424778b/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:border-[#0077B5] dark:hover:border-[#0077B5] hover:text-[#0077B5] transition-all group"
              >
                <Image 
                  src="/linkedin-icon-blue.svg"
                  alt="LinkedIn" 
                  width={20} 
                  height={20} 
                  className="group-hover:scale-110 transition-transform"
                />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/Niklas-Nordin"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:border-brand-orange dark:hover:border-brand-orange hover:text-brand-orange transition-all group"
              >
                <Image 
                  src="/github-icon.svg"
                  alt="GitHub" 
                  width={20} 
                  height={20} 
                  className="group-hover:scale-110 transition-transform invert dark:invert-0"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[600px] mx-auto lg:mx-0 min-h-[380px]">
          {isSuccess ? (
            <div className="w-full p-8 bg-neutral-50 dark:bg-neutral-900/40 rounded-2xl border border-gray-200 dark:border-neutral-800 text-center space-y-4">
              <span className="text-4xl block">🎉</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Message sent successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[400px] mx-auto">
                Thank you for reaching out. Your message has been delivered straight to Niklas, and he will get back to you shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 font-medium text-xs border border-gray-300 dark:border-neutral-800 rounded-xl shadow-sm hover:border-brand-orange dark:hover:border-brand-orange hover:text-brand-orange dark:hover:text-brand-orange transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow-sm rounded-xl text-sm text-gray-950 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow-sm rounded-xl text-sm text-gray-950 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors"
                  placeholder="example@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow-sm rounded-xl text-sm text-gray-950 dark:text-white focus:outline-none focus:border-brand-orange dark:focus:border-brand-orange transition-colors resize-none"
                  placeholder="Hi Niklas, I would love to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 disabled:bg-orange-400 text-white font-medium rounded-xl text-sm shadow-md transition-all duration-200 text-center cursor-pointer active:scale-98 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;