"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function ButtonLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  );
}