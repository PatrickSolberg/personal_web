"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (prevPath.current === "/" && pathname === "/cv") {
      const tl = gsap.timeline();
      tl.to("main", { x: -100, opacity: 0, duration: 0.3, ease: "power2.in" })
        .set("main", { x: 100 })
        .to("main", { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    }

    prevPath.current = pathname;
  }, [pathname]);

  return <>{children}</>;
}
