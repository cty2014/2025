"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-white/40 text-sm sm:text-base md:text-lg font-mono tracking-[0.2em] uppercase font-normal">GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-white">Contact</span>
            <span className="text-white"> Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4 font-light">
            We look forward to collaborating with you to explore the infinite possibilities in tech startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white/60 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black border border-white/25 text-white text-sm sm:text-base rounded-none focus:ring-0 focus:border-white/40 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white/60 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black border border-white/25 text-white text-sm sm:text-base rounded-none focus:ring-0 focus:border-white/40 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-white/60 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black border border-white/25 text-white text-sm sm:text-base rounded-none focus:ring-0 focus:border-white/40 outline-none transition"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white/60 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black border border-white/25 text-white text-sm sm:text-base rounded-none focus:ring-0 focus:border-white/40 outline-none transition resize-none"
                  placeholder="Tell us about your needs or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2.5 sm:py-3 rounded-none text-sm sm:text-base font-medium hover:bg-white/90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@wisecom.biz" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base break-all font-light">
                      info@wisecom.biz
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-white/60 text-sm sm:text-base font-light">
                      8F, No. 42, Xuchang Street<br />
                      Zhongzheng District, Taipei, Taiwan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Business Hours</h2>
              <div className="space-y-2 text-white/60 text-sm sm:text-base font-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-normal text-white/60">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-normal text-white/30">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-normal text-white/30">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
