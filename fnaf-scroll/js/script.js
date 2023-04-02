gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create ({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

   let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

   itemsL.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })

   let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

   itemsR.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
   })
   
}


const hero = document.querySelector('.hero');
const hammer = new Hammer(hero);

hammer.get('swipe').set({
  direction: Hammer.DIRECTION_ALL,
  threshold: 10,
  velocity: 0.2
});

hammer.on('swipe', function(event) {
  if (event.direction === Hammer.DIRECTION_RIGHT) {
    gsap.to('.hero', {opacity: 0, duration: 0.5});
  }
  else if (event.direction === Hammer.DIRECTION_LEFT) {
    gsap.to('.hero', {opacity: 1, duration: 0.5});
  }
});

hammer.get('pan').set({damping: 0.5});
