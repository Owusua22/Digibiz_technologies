"use client";

import { useSyncExternalStore } from "react";

/**
 * The preloader renders on the server and must survive hydration, then
 * disappear once the page has loaded.
 *
 * Reading `document.readyState` during render is what caused the original bug:
 * the client render then disagreed with the server-rendered markup whenever
 * hydration finished *after* the `load` event, and React left the orphaned
 * server node in the DOM — a full-screen `z-index: 9999` overlay that
 * swallowed every click and therefore every tracked interaction.
 *
 * `useSyncExternalStore` resolves this properly: React uses
 * `getServerSnapshot` for the server render *and* for hydration, so the
 * markup always matches, then re-reads `getSnapshot` on mount and re-renders
 * if the page had already finished loading. `subscribe` also keeps it in sync
 * if `load` arrives later. No effect, no cascading render, never stuck.
 */

function subscribe(onStoreChange: () => void) {
  window.addEventListener("load", onStoreChange);
  return () => window.removeEventListener("load", onStoreChange);
}

function getSnapshot() {
  return document.readyState === "complete";
}

function getServerSnapshot() {
  return false;
}

export default function Preloader() {
  const loaded = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (loaded) return null;

  return (
    <div id="preloader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}