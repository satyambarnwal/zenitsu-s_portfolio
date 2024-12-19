const wrapper = document.querySelector(".main");

const scroll = new LocomotiveScroll({
  el: wrapper,
  smooth: true,
});

const tl = gsap.timeline();

tl.to(".page1", {
  y: "100vh",
  scale: 0.5,
  duration: 0,
});

tl.to(".page1", {
  y: "0vh",
  duration: 1,
  delay: 1,
  ease: Expo.easInOut,
});

tl.to(".page1", {
  rotate: -360,
  scale: 1,
  duration: 2,
  delay: 1.5,
  ease: Expo.easInOut,
});
