"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import DownloadButton from "./DownloadButton"; // ← IMPORT HERE

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <ScrollReveal stagger={0.08}>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-7">
          Contact
        </h3>

        <p className="text-sm text-white/60 max-w-xl leading-6">
          Whether you’re looking for a performance marketing expert, PPC
          strategist, SEO specialist, or need help scaling your digital growth —
          I’m open to new opportunities and collaborations. Let’s connect and
          build something impactful together.
        </p>

        {/* Email + Resume */}
        <div className="mt-6 text-white/80 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
          <Link
            href={
              "mailto:avinroy093072@gmail.com?subject=Business%20Enquiry&body=Hi%20Avinash,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20or%20opportunity%20with%20you.%0D%0A%0D%0AThanks!"
            }
            className="inline-flex items-center gap-2 hover:text-[#a855f7] transition-colors"
          >
            <FaEnvelope />
            <span className="underline-offset-2">avinroy093072@gmail.com</span>
          </Link>

          {/* DOWNLOAD BUTTON HERE */}
          <DownloadButton />
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-6 flex items-center gap-5 text-white/80">
          <Link
            href="https://www.linkedin.com/in/avinash-roy-38314538a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7] transition-colors"
          >
            <FaLinkedin className="size-6" />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7] transition-colors"
          >
            <FaInstagram className="size-6" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
