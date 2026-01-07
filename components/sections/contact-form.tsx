"use client";

import { User, Mail, FileText, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#141414] text-white">
      <div className="max-w-[800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-16">
          GET IN TOUCH!
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name and Email */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <User className="w-4 h-4 text-primary" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/10 rounded-sm px-12 py-4 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/10 rounded-sm px-12 py-4 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Row 2: Subject */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/10 rounded-sm px-12 py-4 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Row 3: Message */}
          <div className="relative">
            <div className="absolute left-4 top-6">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-white/10 rounded-sm px-12 py-4 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-10 py-4 border border-white/20 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
