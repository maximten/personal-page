import anime from 'animejs'

const initialAnimationProps = {
  rotateX: '60deg',
  rotateY: '0',
  rotateZ: '45deg',
  autoplay: false
};

const reactAnimation = anime({
  targets: document.getElementById("react"),
  translateX: '100px',
  translateY: '100px',
  ...initialAnimationProps,
});

const reduxAnimation = anime({
  targets: document.getElementById("redux"),
  translateX: '-100px',
  translateY: '100px',
  ...initialAnimationProps,
});

const nodejsAnimation = anime({
  targets: document.getElementById("nodejs"),
  translateX: '-100px',
  translateY: '200px',
  ...initialAnimationProps,
});

const laravelAnimation = anime({
  targets: document.getElementById("laravel"),
  translateX: '100px',
  translateY: '200px',
  ...initialAnimationProps,
});

const dockerAnimation = anime({
  targets: document.getElementById("docker"),
  translateY: '300px',
  ...initialAnimationProps,
});

window.addEventListener('scroll', () => {
  const offset = document.documentElement.scrollTop || document.body.scrollTop;
  const animationProgress = Math.min(100 / (200 / offset), 100);
  reactAnimation.seek(animationProgress);
  reduxAnimation.seek(animationProgress);
  nodejsAnimation.seek(animationProgress);
  laravelAnimation.seek(animationProgress);
  dockerAnimation.seek(animationProgress);
});

