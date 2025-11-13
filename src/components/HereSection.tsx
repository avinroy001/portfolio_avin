"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import ScrollReveal from "./ScrollReveal";
import DownloadButton from "./DownloadButton";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="absolute right-3 top-26 z-40">
        <div className="hidden sm:block">
          <DownloadButton />
        </div>
        {/* small mobile placement */}
        <div className="block sm:hidden">
          <DownloadButton />
        </div>
      </div>
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal
          stagger={0.12}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <Image
                src="/images/avatar.png"
                alt="avatar image"
                width={240}
                height={240}
                className="relative"
                priority
              />

              {/* small greeting with curve arrow */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-24 md:h-16">
                    <Image
                      src="/images/hero-arrow.png"
                      alt="arrow image"
                      fill
                      className="object-contain scale-x-100 -rotate-6"
                      priority
                    />
                  </div>
                  <div className="-mt-6 md:-mt-10 shrink-0">
                    <span>Hello! I am </span>
                    <span className="text-[#a78bfa]">Avinash Roy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              Digital Marketing Executive
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Data-driven</span>
              <span className="block">
                performance marketing{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">
                    specialist
                  </span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="accent"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              PPC, SEO & e-commerce marketer focused on measurable growth and
              ROI.
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            <Typewriter
              words={[
                "Digital Marketing Specialist.",
                "PPC & SEO Expert.",
                "E-commerce & Performance Marketer.",
              ]}
              typeSpeed={65}
              deleteSpeed={40}
              delaySpeed={700}
              cursor
              cursorStyle="|"
              loop={0}
            />
          </h2>

          <p className="mt-3 text-white/90">
            Digital Marketing Executive at{" "}
            <span className="font-semibold text-[#c084fc] drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]">
              KP ENTERPRISES
            </span>
          </p>

          <p className="mt-6 text-white/70 leading-7">
            Dynamic digital marketing professional with 3+ years of experience
            in PPC, SEO, and SEM. I build high-converting campaigns across
            Google Ads, Bing, Meta and LinkedIn, and use GA4, GTM and Looker
            Studio for measurement and optimisation. I focus on data-driven
            strategies that improve ROAS and grow revenue — for example, a
            shopping campaign that achieved 2200% ROAS and a remarketing
            overhaul that improved ad recall and conversions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;
