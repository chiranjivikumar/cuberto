Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./video/2.mp4","./video/3.mp4","./video/4.mp4"]});

gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger: "#fimages",
        start:"top top",
        end : "bottom bottom",
        pin : true,
        endTrigger : ".last",
        scrub : 1
    },
    y : "-300%",
    ease : Power1
})

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        // end : "bottom bottom",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        }
      });
    });
  },
});

gsap.to("#p5-roll h1",{
  x:"-300%",
  duration: 5,
  delay:1,
  repeat:-1,
  yoyo:true,
  loop:true,
  ease : Power1
})
