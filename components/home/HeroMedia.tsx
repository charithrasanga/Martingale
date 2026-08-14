"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SOUND_INTRO_MS = 10_000;

const controlClass =
  "flex h-11 w-11 items-center justify-center text-white/70 transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold";

export function HeroMedia({
  src,
  poster,
  alt,
}: {
  src?: string;
  poster: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastVolume = useRef(0.7);
  const userControlledAudio = useRef(false);
  const introMuteTimer = useRef(0);
  const [canPlay, setCanPlay] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);

  function clearIntroMute() {
    if (introMuteTimer.current) {
      window.clearTimeout(introMuteTimer.current);
      introMuteTimer.current = 0;
    }
  }

  useEffect(() => {
    if (!src) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setCanPlay(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [src]);

  useEffect(() => {
    if (!canPlay || !src) return;
    const video = videoRef.current;
    if (!video) return;

    let introStarted = false;

    const startIntroMute = () => {
      if (introStarted || video.muted || userControlledAudio.current) return;
      introStarted = true;
      introMuteTimer.current = window.setTimeout(() => {
        if (userControlledAudio.current) return;
        video.muted = true;
        setMuted(true);
      }, SOUND_INTRO_MS);
    };

    const onPlaying = () => {
      startIntroMute();
    };

    video.volume = lastVolume.current;
    video.muted = false;
    setMuted(false);
    video.addEventListener("playing", onPlaying);

    void video
      .play()
      .then(() => {
        setPaused(false);
        startIntroMute();
      })
      .catch(() => {
        video.muted = true;
        setMuted(true);
        void video.play().then(() => setPaused(false)).catch(() => {});
      });

    return () => {
      video.removeEventListener("playing", onPlaying);
      clearIntroMute();
    };
  }, [canPlay, src]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setPaused(false)).catch(() => {});
    } else {
      video.pause();
      setPaused(true);
    }
  }

  function applyVolume(next: number, nextMuted: boolean) {
    const video = videoRef.current;
    if (!video) return;
    userControlledAudio.current = true;
    clearIntroMute();
    video.volume = next;
    video.muted = nextMuted;
    setVolume(next);
    setMuted(nextMuted);
    if (next > 0) lastVolume.current = next;
  }

  function toggleMute() {
    if (muted || volume === 0) {
      applyVolume(lastVolume.current || 0.7, false);
    } else {
      applyVolume(volume, true);
    }
  }

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      {canPlay && src ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            autoPlay
            muted={muted}
            loop
            playsInline
            poster={poster}
            aria-hidden
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute right-4 bottom-8 z-20 flex items-center gap-1 lg:right-12 lg:bottom-10 lg:gap-2">
            <button
              type="button"
              className={controlClass}
              aria-label={paused ? "Play hero video" : "Pause hero video"}
              aria-pressed={paused}
              onClick={togglePlayback}
            >
              {paused ? <PlayIcon /> : <PauseIcon />}
            </button>
            <button
              type="button"
              className={controlClass}
              aria-label={muted ? "Unmute hero video" : "Mute hero video"}
              aria-pressed={muted}
              onClick={toggleMute}
            >
              {muted || volume === 0 ? <MutedIcon /> : <VolumeIcon />}
            </button>
            <label className="flex h-11 items-center px-1">
              <span className="sr-only">Hero video volume</span>
              <input
                type="range"
                className="hero-volume"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round((muted ? 0 : volume) * 100)}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  applyVolume(next, next === 0);
                }}
              />
            </label>
          </div>
        </>
      ) : null}
    </>
  );
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <rect x="3" y="2" width="3.5" height="12" />
      <rect x="9.5" y="2" width="3.5" height="12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M4 2.5v11l10-5.5L4 2.5Z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4v-5Z" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M15.2 9.2a3.4 3.4 0 0 1 0 5.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4v-5Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="m15 10 5 5M20 10l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}
