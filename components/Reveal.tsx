"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveal. Content is fully visible on the server and without JS — we only
 * add a transform offset on the client for elements still below the fold, then
 * slide them to rest as they enter the viewport (transform only, never opacity,
 * so copy is never invisible). Honors prefers-reduced-motion.
 *
 * Child elements marked with data-anim="dawn"|"pop" and an optional
 * data-delay (seconds) animate in alongside their container.
 */
export default function Reveal({
  children,
  className,
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return; // already at rest

    const animChildren = Array.from(
      node.querySelectorAll<HTMLElement>("[data-anim]")
    );

    const playChild = (el: HTMLElement) => {
      const type = el.getAttribute("data-anim");
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      el.style.transition = "none";
      el.style.transform = type === "pop" ? "scale(0.72)" : "translateY(8px)";
      void el.offsetWidth; // force reflow
      el.style.transitionProperty = "transform";
      el.style.transitionDuration = "0.5s";
      el.style.transitionTimingFunction = "cubic-bezier(0.2,0,0.1,1)";
      el.style.transitionDelay = `${delay}s`;
      el.style.transform = "none";
    };

    const reveal = () => {
      node.classList.remove("pd-reveal-init");
      node.classList.add("pd-reveal-in");
      animChildren.forEach(playChild);
    };

    const vh = window.innerHeight || 800;
    const top = node.getBoundingClientRect().top;

    // Above the fold at mount: show immediately, no slide (avoids a flash).
    if (top < vh * 0.92) {
      reveal();
      return;
    }

    node.classList.add("pd-reveal-init");

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-pd-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}
