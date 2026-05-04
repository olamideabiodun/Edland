"use client";

import Link from "next/link";

export const APP_STORE_URL = "https://apps.apple.com/tr/app/ednux-mobile/id6759625477";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.ednux.mobile";

const AppleGlyph = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PlayGlyph = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00C3FF" d="M3.6 1.8a1 1 0 0 0-.6.9v18.6a1 1 0 0 0 .6.9L13.8 12 3.6 1.8z" />
    <path fill="#FFC107" d="M17.5 8.6 14.3 10.4 13.8 12l3.7 3.4 3.1-1.8a1.6 1.6 0 0 0 0-2.8l-3.1-1.7z" />
    <path fill="#FF3D44" d="M3.6 22.2a1 1 0 0 0 1.1.1l13-7.4-3.7-3.4L3.6 22.2z" />
    <path fill="#00E676" d="M14 11.7l3.5-3.1-13-7.4a1 1 0 0 0-1.1.1L14 11.7z" />
  </svg>
);

type Variant = "dark" | "light";

interface StoreBadgesProps {
  variant?: Variant;
  className?: string;
  showLabel?: boolean;
  label?: string;
  compact?: boolean;
}

const StoreBadges = ({
  variant = "dark",
  className = "",
  showLabel = false,
  label = "Now live on iOS & Android",
  compact = false,
}: StoreBadgesProps) => {
  if (compact) {
    const compactStyle =
      variant === "dark"
        ? "bg-slate-900 text-white hover:bg-slate-800"
        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50";

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ednux on the App Store"
          title="Download on the App Store"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 ${compactStyle}`}
        >
          <AppleGlyph className="h-4 w-4" />
        </Link>
        <Link
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Ednux on Google Play"
          title="Get it on Google Play"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 ${compactStyle}`}
        >
          <PlayGlyph className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const badgeBase =
    "inline-flex items-center gap-3 rounded-xl px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5";
  const badgeStyle =
    variant === "dark"
      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
      : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm";

  const labelColor = variant === "dark" ? "text-slate-300" : "text-slate-500";

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {showLabel && (
        <span className={`text-[13px] font-medium tracking-wide ${labelColor}`}>
          {label}
        </span>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ednux on the App Store"
          className={`${badgeBase} ${badgeStyle}`}
        >
          <AppleGlyph />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-wider opacity-80">
              Download on the
            </span>
            <span className="text-[16px] font-semibold">App Store</span>
          </span>
        </Link>

        <Link
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Ednux on Google Play"
          className={`${badgeBase} ${badgeStyle}`}
        >
          <PlayGlyph />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-wider opacity-80">
              Get it on
            </span>
            <span className="text-[16px] font-semibold">Google Play</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StoreBadges;
