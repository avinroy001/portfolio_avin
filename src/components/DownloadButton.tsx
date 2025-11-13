"use client";

import React from "react";

function trackDownload() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "file_download", {
      event_category: "Resume",
      event_label: "Avinash_resume.pdf",
      value: 1,
    });
  }
}

/**
 * Programmatic download button — avoids router interception and works reliably
 * Ensure the file exists at /public/resume/Avinash_resume.pdf (exact filename, case-sensitive)
 */
export default function DownloadButton() {
  const filePath = "/resume/Avinash_resume.pdf"; // <-- update if your filename differs

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    trackDownload();

    try {
      const res = await fetch(filePath, { method: "GET" });

      if (!res.ok) {
        // server error or 404
        throw new Error(`File not found (status ${res.status})`);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Avinash_resume.pdf"; // filename shown to user
      document.body.appendChild(a);
      a.click();

      // cleanup
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error("Download failed:", err);
      // Friendly user feedback
      alert(
        `Could not download resume: ${err?.message ?? "unknown error"}. Try opening the file directly at ${filePath}`
      );
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6d28d9] hover:bg-[#7c3aed] text-white text-sm transition"
      aria-label="Download resume (PDF)"
      type="button"
    >
      {/* simple download icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Download Resume
    </button>
  );
}
