"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return document.readyState !== "complete";
  });

  useEffect(() => {
    if (document.readyState === "complete") return;

    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
