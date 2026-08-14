"use client";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.18em] text-white">
        Stay connected
      </p>
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border border-white/30 bg-transparent px-3 py-2.5 pr-10 text-[16px] text-white outline-none placeholder:text-white/40 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white transition-colors duration-300 hover:text-gold"
          aria-label="Subscribe"
        >
          →
        </button>
      </div>
    </form>
  );
}
