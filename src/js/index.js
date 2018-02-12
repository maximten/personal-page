import anime from 'animejs'

const middleFrameAnimation = anime({
  targets: document.getElementById("middle-frame"),
  translateY: '100px',
  rotateX: '60deg',
  rotateY: '0',
  rotateZ: '45deg',
  autoplay: false
});

const bottomFrameAnimation = anime({
  targets: document.getElementById("bottom-frame"),
  translateY: '200px',
  rotateX: '60deg',
  rotateY: '0',
  rotateZ: '45deg',
  autoplay: false
});

window.addEventListener('scroll', () => {
  const offset = document.documentElement.scrollTop || document.body.scrollTop;
  const animationProgress = Math.min(100 / (200 / offset), 100);
  middleFrameAnimation.seek(animationProgress);
  bottomFrameAnimation.seek(animationProgress);
});

