"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 space-y-28">

      {/* PROJECT 1 – PPC Campaign Management */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125,58,242,0.65) 0%, rgba(18,8,36,0) 70%)",
          }}
        />

        <ScrollReveal
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* TEXT */}
          <div className="relative z-10">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">Performance Marketing Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Google Ads + Bing Ads End-to-End Setup
              </h3>
            </div>

            <div className="relative md:-mr-20 md:-mt-4 z-20 max-w-4xl rounded-2xl p-5 bg-white/10 backdrop-blur-sm border border-white/10 shadow-[0_6px_40px_rgba(126,34,206,0.25)]">
              <p className="text-sm text-white/75 p-4">
                Full-funnel PPC setup for an e-commerce brand including
                Search, Shopping, Performance Max & Bing Ads. Achieved{" "}
                <span className="text-[#c084fc] font-medium">2200% ROAS</span>,
                reduced CPA by 38%, and scaled monthly revenue using keyword
                optimization and bidding automation.
              </p>
            </div>

            <div className="mt-6 ml-2 flex justify-start space-x-3 text-white/60">
              <span>Google Ads</span>
              <span>Microsoft Ads</span>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <Image
                  src="/images/projects/google-ads.png"
                  alt="Google Ads Project"
                  width={600}
                  height={300}
                  className="w-full h-auto transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* PROJECT 2 – GA4 & GTM Tracking Implementation */}
      <div>
        <div
          className="pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 60% 40%, rgba(125,58,242,0.65) 0%, rgba(18,8,36,0) 70%)",
          }}
        />

        <ScrollReveal
          stagger={0.14}
          delay={0.6}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* TEXT */}
          <div className="relative md:order-2 z-10">
            <div className="mb-12 text-right">
              <p className="text-xs text-[#a48cc9]">Analytics Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                GA4 + GTM Enhanced Tracking Setup
              </h3>
            </div>

            <div className="relative md:-ml-20 md:-mt-4 z-20 max-w-4xl rounded-2xl p-5 bg-white/10 backdrop-blur-sm border border-white/10 shadow-[0_6px_40px_rgba(126,34,206,0.25)]">
              <p className="text-sm text-white/75 p-4">
                Implemented advanced GA4 tracking using GTM including custom events,
                enhanced conversions, scroll tracking, ecommerce funnels, and improved
                debugging. Reduced implementation time from 40 hours to{" "}
                <span className="text-[#c084fc] font-medium">7 hours</span>.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-3 text-white/60">
              <span>GA4</span>
              <span>GTM</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative md:order-1">
            <div
              tabIndex={0}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <Image
                  src="/images/projects/ga4-gtm.png"
                  alt="GA4 GTM Project"
                  width={600}
                  height={300}
                  className="w-full h-auto transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* PROJECT 3 – SEO Audit */}
      <div>
        <ScrollReveal
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          <div className="relative z-10">
            <div className="mb-12">
              <p className="text-xs text-[#a48cc9]">SEO Project</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Complete Technical SEO Audit
              </h3>
            </div>

            <div className="relative md:-mr-20 md:-mt-4 z-20 max-w-4xl rounded-2xl p-5 bg-white/10 backdrop-blur-sm border border-white/10">
              <p className="text-sm text-white/75 p-4">
                Performed website crawl analysis, fixed metadata issues, schema errors,
                mobile optimization, and improved crawl budget using Screaming Frog,
                GSC, and SEMrush audits.
              </p>
            </div>

            <div className="mt-6 ml-2 flex justify-start space-x-3 text-white/60">
              <span>SEMrush</span>
              <span>SEO Audit</span>
            </div>
          </div>

          <div>
            <div
              className="group rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <Image
                  src="/images/projects/seo-audit.png"
                  alt="SEO Audit Project"
                  width={600}
                  height={300}
                  className="w-full h-auto transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* PROJECT 4 – Looker Studio Dashboard */}
      <div>
        <ScrollReveal
          stagger={0.14}
          delay={0.4}
          className="grid grid-cols-1 md:grid-cols-2 items-center"
        >
          <div className="relative md:order-2 z-10">
            <div className="mb-12 text-right">
              <p className="text-xs text-[#a48cc9]">Analytics Dashboard</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white/90">
                Looker Studio Marketing Dashboard
              </h3>
            </div>

            <div className="relative md:-ml-20 md:-mt-4 z-20 max-w-4xl rounded-2xl p-5 bg-white/10 backdrop-blur-sm border border-white/10">
              <p className="text-sm text-white/75 p-4">
                Developed a unified Looker Studio dashboard combining Google Ads,
                Facebook Ads, and GA4 data for real-time performance tracking and
                automated reporting.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-3 text-white/60">
              <span>Looker Studio</span>
              <span>PPC</span>
              <span>GA4</span>
            </div>
          </div>

          <div className="relative md:order-1">
            <div
              className="group rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[360px]">
                <Image
                  src="/images/projects/looker-dashboard.png"
                  alt="Looker Dashboard Project"
                  width={600}
                  height={300}
                  className="w-full h-auto transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[55%]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
