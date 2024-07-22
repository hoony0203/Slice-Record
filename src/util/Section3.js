import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

let typeSplit;

// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-word", {
    types: "lines, words",
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create staggered animation
function createAnimation() {
  let allMasks = $(".word")
    .map(function () {
      return $(this).find(".line-mask");
    })
    .get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".split-word",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true,
    },
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 0.5,
    stagger: 0.5,
  });
}
