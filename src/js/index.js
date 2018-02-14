import anime from 'animejs'

let headerFolded = false;
let skillsAnimated = false;

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

document.getElementById('main-link').onclick = (e) => {
  e.preventDefault();
  const header = document.getElementById('header');
  if (headerFolded) {
    header.classList.remove('folded');
  } else {
    header.classList.add('folded');
  }
  headerFolded = !headerFolded;
};

const scrollHandle = () => {
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
  if (offset >= 50) {
    document.getElementById('react-label').classList.add('open');
    document.getElementById('redux-label').classList.add('open');
  } else {
    document.getElementById('react-label').classList.remove('open');
    document.getElementById('redux-label').classList.remove('open');
  }
  if (offset >= 100) {
    document.getElementById('nodejs-label').classList.add('open');
    document.getElementById('laravel-label').classList.add('open');
  } else {
    document.getElementById('nodejs-label').classList.remove('open');
    document.getElementById('laravel-label').classList.remove('open');
  }
  if (offset >= 150) {
    document.getElementById('docker-label').classList.add('open');
  } else {
    document.getElementById('docker-label').classList.remove('open');
  }
  if (offset > 0) {
    document.getElementById('header').classList.add('folded');
    headerFolded = true;
  } else {
    document.getElementById('header').classList.remove('folded');
    headerFolded = false;
  }
  if (Math.abs(document.getElementById("skills").offsetTop - offset) < 200 && !skillsAnimated) {
    skillsAnimated = true;
    document.getElementById("skills-scene").classList.add('unfolded');
  }
};
scrollHandle();
window.addEventListener('scroll', scrollHandle);

const lines = [...document.querySelectorAll('.line span')];
lines.forEach((item, key) => {
  if (Math.random() > 0.5) {
    item.style.left = (Math.random() * (100) + 10) + 'px';
  } else {
    item.style.right = (Math.random() * (100) + 10) + 'px';
  }
  item.style.fontSize = (Math.random() * (30) + 18) + 'px';
});