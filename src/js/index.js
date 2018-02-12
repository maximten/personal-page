import anime from 'animejs'

const initialAnimationProps = {
  rotateX: '60deg',
  rotateY: '0',
  rotateZ: '45deg',
  autoplay: false
};

const layer1Animation = anime({
  targets: document.getElementById("layer1"),
  translateY: '100px',
  ...initialAnimationProps,
});

const reactAnimation = anime({
  targets: document.getElementById("react"),
  translateX: '120px',
  autoplay: false
});

const reduxAnimation = anime({
  targets: document.getElementById("redux"),
  translateX: '-120px',
  autoplay: false
});

const layer2Animation = anime({
  targets: document.getElementById("layer2"),
  translateY: '200px',
  ...initialAnimationProps,
});

const nodejsAnimation = anime({
  targets: document.getElementById("nodejs"),
  translateX: '120px',
  autoplay: false
});

const laravelAnimation = anime({
  targets: document.getElementById("laravel"),
  translateX: '-120px',
  autoplay: false
});

const dockerAnimation = anime({
  targets: document.getElementById("docker"),
  translateY: '300px',
  ...initialAnimationProps,
});

window.addEventListener('scroll', () => {
  const offset = document.documentElement.scrollTop || document.body.scrollTop;
  const animationProgress = Math.min(100 / (50 / offset), 100);
  layer1Animation.seek(animationProgress);
  const animationProgress2 = Math.min(100 / (50 / Math.max(0, (offset - 50))), 100);
  reactAnimation.seek(animationProgress2);
  reduxAnimation.seek(animationProgress2);
  const animationProgress3 = Math.min(100 / (100 / offset), 100);
  layer2Animation.seek(animationProgress3);
  const animationProgress4 = Math.min(100 / (50 / Math.max(0, (offset - 100))), 100);
  nodejsAnimation.seek(animationProgress4);
  laravelAnimation.seek(animationProgress4);
  const animationProgress5 = Math.min(100 / (150 / offset), 100);
  dockerAnimation.seek(animationProgress5);
});

