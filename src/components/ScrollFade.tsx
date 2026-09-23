"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const FADE_CLASS = "na-scroll-fade";
const VISIBLE_ATTRIBUTE = "data-scroll-fade-visible";

function isFadeDisabled(element: HTMLElement) {
  return element.closest('[data-scroll-fade="off"]') !== null;
}

function collectFadeTargets() {
  const targets = new Set<HTMLElement>();

  document.querySelectorAll<HTMLElement>("main").forEach((main) => {
    const sections = Array.from(main.querySelectorAll<HTMLElement>("section"));

    sections.forEach((section) => {
      if (!isFadeDisabled(section)) {
        targets.add(section);
      }
    });

    Array.from(main.children).forEach((child) => {
      if (!(child instanceof HTMLElement) || child.matches("section")) {
        return;
      }

      const containsFadeTarget =
        child.querySelector('section, [data-scroll-fade="on"]') !== null;

      if (!containsFadeTarget && !isFadeDisabled(child)) {
        targets.add(child);
      }
    });
  });

  document.querySelectorAll<HTMLElement>("footer").forEach((footer) => {
    if (!isFadeDisabled(footer)) {
      targets.add(footer);
    }
  });

  document
    .querySelectorAll<HTMLElement>('[data-scroll-fade="on"]')
    .forEach((element) => {
      if (!isFadeDisabled(element)) {
        targets.add(element);
      }
    });

  return targets;
}

function isAlreadyVisible(element: HTMLElement) {
  return element.getBoundingClientRect().top <= window.innerHeight;
}

export function ScrollFade() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observedTargets = new WeakSet<HTMLElement>();

    const reveal = (element: HTMLElement) => {
      element.setAttribute(VISIBLE_ATTRIBUTE, "true");
    };

    const revealWithoutAnimation = () => {
      collectFadeTargets().forEach(reveal);
    };

    if (reducedMotion) {
      revealWithoutAnimation();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealWithoutAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          reveal(target);
          observer.unobserve(target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      },
    );

    const observeTargets = () => {
      collectFadeTargets().forEach((target) => {
        if (
          target.getAttribute(VISIBLE_ATTRIBUTE) === "true" ||
          observedTargets.has(target)
        ) {
          return;
        }

        if (isAlreadyVisible(target)) {
          reveal(target);
          return;
        }

        target.classList.add(FADE_CLASS);
        observedTargets.add(target);
        observer.observe(target);
      });
    };

    collectFadeTargets().forEach((target) => {
      target.classList.remove(FADE_CLASS);
      target.removeAttribute(VISIBLE_ATTRIBUTE);
    });

    observeTargets();

    let animationFrame = 0;
    const mutationObserver = new MutationObserver(() => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(observeTargets);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
