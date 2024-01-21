import './scroll-timeline.js';

const progress = document.querySelector('.progress');
const targetImages = document.querySelectorAll('.target-image');

progress.animate(
  [
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' },
  ], {
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: document.body, edge: 'start', threshold: 1 },
        { target: document.body, edge: 'end', threshold: 1 },
      ]
    })
  }
);

targetImages.forEach(image => {
  const imageTop = image.offsetTop;
  const imageHeight = image.offsetHeight;

  image.animate(
    [
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      timeline: new ScrollTimeline({
        scrollOffsets: [
          new CSSUnitValue(imageTop - window.innerHeight, 'px'),
          new CSSUnitValue(imageTop + imageHeight - window.innerHeight, 'px')
        ]
      })
    }
  )
});
