"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "訊息已成功發送！我們會盡快與您聯繫。",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "發送訊息時發生錯誤，請稍後再試。",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "發送訊息時發生錯誤，請稍後再試。",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {submitStatus.type && (
              <div
                className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-none border ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border-green-500/50 text-green-400"
                    : "bg-red-500/10 border-red-500/50 text-red-400"
                }`}
              >
                <p className="text-sm sm:text-base">{submitStatus.message}</p>
              </div>
            )}
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
                disabled={isSubmitting}
                className="w-full bg-white text-black py-2.5 sm:py-3 rounded-none text-sm sm:text-base font-medium hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "發送中..." : "Send Message"}
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
