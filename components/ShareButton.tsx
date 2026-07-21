"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <button
      onClick={handleShare}
      aria-label="Share this post"
      className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
    >
      {copied ? (
        <>
          <Check size={14} /> COPIED
        </>
      ) : (
        <>
          <Share2 size={14} /> SHARE
        </>
      )}
    </button>
  );
}