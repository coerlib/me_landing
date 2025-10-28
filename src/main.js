import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ===== HERO INTRO =====
window.addEventListener("load", () => {
  gsap.to("#title", { opacity: 1, y: -10, duration: 0.8 });
  gsap.to("#subtitle", { opacity: 1, y: -10, duration: 0.8, delay: 0.2 });
  gsap.to("#ctaBtn", { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
});

// ===== PERFORMANCE SAFE ANIMATIONS =====
const isDesktop = window.innerWidth > 768;

// Мягкая подсветка сетки — только на десктопе
if (isDesktop) {
  const paths = document.querySelectorAll("svg path");
  gsap.to(paths, {
    strokeOpacity: 0.3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 3,
  });
}

// ===== SCROLL REVEALS =====
if (isDesktop) {
  const revealBlocks = [
    "#how .feature-card",
    "#examples .feature-card",
    "#why .feature-card",
    "#social blockquote",
  ];

  revealBlocks.forEach((selector) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });

  gsap.utils.toArray("section h2").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 90%" },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
    });
  });
}

// ===== BUTTON HOVER EFFECT =====
if (isDesktop) {
  document.querySelectorAll("a[href*='telegram'], #ctaBtn, a.bg-[#00F5FF]").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { boxShadow: "0 0 25px #00F5FF99", duration: 0.25 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { boxShadow: "0 0 10px #00F5FF55", duration: 0.25 });
    });
  });
}

// ===== ANALYTICS =====
document.querySelectorAll("a[href*='t.me']").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.gtag)
      gtag("event", "telegram_click", { event_category: "cta", value: 1 });
  });
});
