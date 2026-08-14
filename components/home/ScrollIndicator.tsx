"use client";

export function ScrollIndicator() {
  function scrollToStory(event: React.MouseEvent<HTMLAnchorElement>) {
    const section = document.getElementById("our-story");
    const header = document.querySelector("header");
    if (!section || !header) return;

    event.preventDefault();
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      header.getBoundingClientRect().height -
      10;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <a
      href="#our-story"
      aria-label="Scroll to our story"
      onClick={scrollToStory}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/80 transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <span className="scroll-cue block motion-reduce:animate-none">
        <MouseIcon />
      </span>
    </a>
  );
}

function MouseIcon() {
  return (
    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden>
      <rect
        x="1"
        y="1"
        width="20"
        height="32"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M11 8v5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}
