import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// intro animation
window.addEventListener("load", () => {
  gsap.to("#title", { opacity: 1, y: -10, duration: 1 });
  gsap.to("#subtitle", { opacity: 1, y: -10, duration: 1, delay: 0.3 });
  gsap.to("#ctaBtn", { opacity: 1, y: -10, duration: 1, delay: 0.6 });
});

// glow parallax
gsap.utils.toArray(".feature-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 85%" },
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: "power2.out",
  });
});

// subtle hero motion
gsap.to("header", {
  backgroundPositionY: "20%",
  ease: "none",
  scrollTrigger: { trigger: "header", start: "top top", end: "bottom top", scrub: true },
});

// form animation
document.getElementById("leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log("Lead:", data);
  gsap.to(e.target, { scale: 0.9, yoyo: true, repeat: 1, duration: 0.1 });
  alert("Спасибо! Заявка отправлена.");
  e.target.reset();
});
