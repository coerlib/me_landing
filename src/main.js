import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// =============== HERO INTRO ===============
window.addEventListener("load", () => {
  gsap.to("#title", { opacity: 1, y: -10, duration: 1 });
  gsap.to("#subtitle", { opacity: 1, y: -10, duration: 1, delay: 0.3 });
  gsap.to("#ctaBtn", { opacity: 1, y: 0, duration: 1, delay: 0.6 });
});

// =============== BACKGROUND GRID GLOW ===============
gsap.to("path", {
  strokeOpacity: 0.3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 3,
});

// =============== SCROLL REVEALS ===============
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
      duration: 0.7,
      ease: "power2.out",
    });
  });
});

// Заголовки разделов — лёгкое появление
gsap.utils.toArray("section h2").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 90%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  });
});

// =============== BUTTON HOVER EFFECT ===============
const buttons = document.querySelectorAll("a[href*='telegram'], #ctaBtn, a.bg-[#00F5FF]");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { boxShadow: "0 0 35px #00F5FFaa", duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { boxShadow: "0 0 20px #00F5FF66", duration: 0.3 });
  });
});

// аналитика: клик по Telegram-кнопкам
document.querySelectorAll("a[href*='t.me']").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.gtag)
      gtag("event", "telegram_click", { event_category: "cta", value: 1 });
  });
});
