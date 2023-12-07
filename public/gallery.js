let imgs = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
let currentImg = 0;
const interval = 4000;

function changeSlide(n) {
  for (let i = 0; i < imgs.length; i++) {
    // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }
console.log(imgs, currentImg)
  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

let timer = setInterval(changeSlide, interval);

let isPlaying = true;

function togglePlayPause() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    timer = setInterval(changeSlide, interval);
  } else {
    clearInterval(timer);
  }
}
