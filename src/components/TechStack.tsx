"use client";

import React, { useState } from "react";
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSemrush,
  SiMeta,
} from "react-icons/si";

import AdsClickIcon from "@mui/icons-material/AdsClick";
import InsightsIcon from "@mui/icons-material/Insights";
import BugReportIcon from "@mui/icons-material/BugReport";

import ScrollReveal from "./ScrollReveal";

type Skill = {
  id: string;
  name: string;
  icon: React.ReactNode;
  level: number;
  short: string;
  detail?: string;
  category: "PPC" | "Analytics" | "SEO";
};

const SKILLS: Skill[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    icon: <SiGoogleads className="w-8 h-8" />,
    level: 90,
    short: "Search • Shopping • PMAX",
    detail: "Full campaign setup, feed optimization and 2200% ROAS results.",
    category: "PPC",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    icon: <SiMeta className="w-8 h-8" />,
    level: 80,
    short: "Facebook & Instagram Ads",
    detail: "Retargeting, creatives, A/B tests and conversion optimization.",
    category: "PPC",
  },
  {
    id: "microsoft-ads",
    name: "Microsoft Ads (Bing)",
    icon: <AdsClickIcon sx={{ fontSize: 32, color: "white" }} />,
    level: 70,
    short: "Bing Search Campaigns",
    detail: "Low CPC campaigns for incremental conversions.",
    category: "PPC",
  },
  {
    id: "ga4",
    name: "Google Analytics (GA4)",
    icon: <SiGoogleanalytics className="w-8 h-8" />,
    level: 88,
    short: "Event-based Tracking",
    detail: "Events, funnels, retention analysis and ecommerce setup.",
    category: "Analytics",
  },
  {
    id: "gtm",
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-8 h-8" />,
    level: 92,
    short: "Tags • Triggers • Variables",
    detail: "Enhanced conversions, S2S tagging and tracking QA.",
    category: "Analytics",
  },
  {
    id: "looker",
    name: "Looker Studio",
    icon: <InsightsIcon sx={{ fontSize: 32, color: "white" }} />,
    level: 85,
    short: "Dashboards & Reporting",
    detail: "Blended data reports, automated insights and performance charts.",
    category: "Analytics",
  },
  {
    id: "semrush",
    name: "SEMrush",
    icon: <SiSemrush className="w-8 h-8" />,
    level: 78,
    short: "Keyword Research",
    detail: "Competitor analysis, content audits and keyword gap research.",
    category: "SEO",
  },
  {
    id: "screamingfrog",
    name: "Screaming Frog",
    icon: <BugReportIcon sx={{ fontSize: 32, color: "white" }} />,
    level: 72,
    short: "Technical SEO Crawling",
    detail: "Fixing crawl errors, redirects, schema and CWV issues.",
    category: "SEO",
  },
];

const categories: Skill["category"][] = ["PPC", "Analytics", "SEO"];

export default function TechStack() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="lab" className="relative py-28">
      <ScrollReveal stagger={0.08} className="text-center">
        <h3 className="text-white/90 text-2xl mb-2">Tools & Technologies</h3>
        <p className="text-white/50 text-sm mb-12 max-w-2xl mx-auto">
          Platforms I use to execute and scale high-performing digital marketing strategies.
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          {categories.map((cat) => (
            <div key={cat}>
              <h4 className="text-left text-white/90 font-semibold mb-4 text-lg">
                {cat}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {SKILLS.filter((s) => s.category === cat).map((skill) => {
                  const isOpen = expanded === skill.id;

                  return (
                    <div
                      key={skill.id}
                      className="rounded-xl p-5 bg-[#11071f] border border-[#2b1d3f] hover:border-[#7c3aed] transition"
                    >
                      <button
                        onClick={() =>
                          setExpanded(isOpen ? null : skill.id)
                        }
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1b0730] shadow">
                              {skill.icon}
                            </div>

                            <div>
                              <p className="text-white text-sm font-medium">
                                {skill.name}
                              </p>
                              <p className="text-[11px] text-white/50">
                                {skill.short}
                              </p>
                            </div>
                          </div>

                          <div className="w-20">
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#a855f7] transition-all duration-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <p className="text-white/40 text-xs mt-2">
                          {isOpen ? "Hide details ▲" : "Learn more ▼"}
                        </p>
                      </button>

                      {isOpen && (
                        <div className="mt-4 text-white/70 text-sm">
                          <p className="mb-3">{skill.detail}</p>
                          <a
                            href="#contact"
                            className="px-3 py-1.5 bg-[#7c3aed] text-white rounded text-xs"
                          >
                            Contact Me
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
