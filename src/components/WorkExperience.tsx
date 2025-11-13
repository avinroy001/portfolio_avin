// WorkExperience.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { XMarkIcon } from "@heroicons/react/24/solid"; // optional, or use any svg/button

type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string;
  bullets?: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    id: "ppc-campaigns",
    title: "PPC Campaign Management",
    description:
      "Planned, created, and optimized high-performing PPC campaigns across Google Ads & Bing Ads to drive sales, leads, and maximize ROAS. Achieved 2200% ROAS on shopping campaigns.",
    image: "/images/work-expriences-1.png",
    details:
      "Led end-to-end management of shopping & search campaigns including keyword research, bidding strategy, feed optimization, and CRO.",
    bullets: [
      "Built shopping campaign that delivered 2200% ROAS.",
      "Managed budgets up to ₹X/month and reduced CPA by Y%.",
      "A/B tested creatives & built remarketing audiences.",
    ],
  },
  {
    id: "gtm-ga4",
    title: "GTM & GA4 Implementation",
    description:
      "Implemented advanced tracking using GTM & GA4, including enhanced conversions and custom events. Reduced GTM/GA4 setup time by 80% (from 40 to 7 hours).",
    image: "/images/work-expriences-2.png",
    details:
      "Setup GTM containers, custom events, e-commerce tracking and enhanced conversions. Created QA checklist for tracking reliability.",
    bullets: [
      "Deployed enhanced conversions and server-side tagging.",
      "Created reusable GTM templates for faster deployments.",
    ],
  },
  {
    id: "seo-audits",
    title: "SEO Audits & Website Optimization",
    description:
      "Conducted technical SEO audits and optimized websites for performance, mobile responsiveness, metadata, schema, and crawling issues using SEMrush, Screaming Frog & GSC.",
    image: "/images/work-expriences-3.png",
    details:
      "Performed site crawls, fixed indexation issues, implemented structured data and improved Core Web Vitals.",
    bullets: ["Resolved crawl issues", "Implemented schema markup", "Improved LCP and CLS"],
  },
  {
    id: "analytics-reporting",
    title: "Analytics, Reporting & Strategy",
    description:
      "Built detailed weekly/monthly PPC & SEO dashboards in Looker Studio. Improved remarketing performance with a 60% boost in ad recall and 10% increase in conversions.",
    image: "/images/work-expriences-4.png",
    details:
      "Created templates and dashboards to measure full-funnel performance and ROI for stakeholders.",
    bullets: [
      "Built Looker Studio dashboards with custom segments.",
      "Improved remarketing performance — +60% ad recall, +10% conv.",
    ],
  },
];

const WorkExperience: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ExperienceItem | null>(null);

  const openModal = (item: ExperienceItem) => {
    setActive(item);
    setOpen(true);
    // optional: lock body scroll
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setActive(null);
    if (typeof window !== "undefined") document.body.style.overflow = "";
  };

  return (
    <section id="about" className="relative py-24">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(168,85,247,0.6) 0%, rgba(126,34,206,0) 70%)",
        }}
      />
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
          Work Experience
        </h3>

        <ScrollReveal
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8"
        >
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113,39,186,0.25)] transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,0.40)]"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 10%, rgba(125,58,242,0.35) 0%, rgba(126,58,242,0.15) 25%), rgba(18,8,36,0) 60%",
                }}
              ></div>

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                <div className="relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(113,39,186,0.35)]"
                    priority
                  />
                </div>

                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <button
                      onClick={() => openModal(item)}
                      className="inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>

      {/* Modal */}
      {open && active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative max-w-3xl w-full bg-[#0f0720] rounded-2xl p-6 sm:p-8 z-10 shadow-2xl">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              {/* simple X */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/3 h-40 rounded-lg overflow-hidden">
                <Image src={active.image} alt={active.title} fill className="object-contain" priority />
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">{active.title}</h4>
                <p className="mt-2 text-sm text-white/70">{active.details ?? active.description}</p>

                {active.bullets && (
                  <ul className="mt-4 list-disc list-inside text-white/70 space-y-2">
                    {active.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex gap-3">
                  <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-[#6d28d9] hover:bg-[#7c3aed] text-white">
                    Contact Me
                  </Link>
                  <Link href={`/experience/${active.id}`} className="inline-flex items-center px-4 py-2 rounded-md border border-white/10 text-white/90">
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkExperience;
