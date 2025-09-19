// 첫 화면
window.addEventListener('load', function () {
  const flipPaths = document.querySelectorAll('.flip-path');
  const clsPaths = document.querySelectorAll('.cls-1');
  const svgWrapper = document.querySelector('.section01_inner_top');
  const header = document.getElementById('header');
  const flipTxt = document.querySelector('.flip_txt');

  flipPaths.forEach((path, index) => {
    path.style.transitionDelay = `${index * 0.05}s`;
    path.classList.add('active');
  });

  clsPaths.forEach((path, index) => {
    setTimeout(() => {
      path.classList.add('active');
    }, index * 40);
  });

  // 3. 모든 SVG 애니메이션 끝난 후 svg 통째로 위로 이동 + header/flip_txt 등장 --------------------------------------------------------------
  const totalAnimationTime = (flipPaths.length * 30 + clsPaths.length * 25) + 700;


  setTimeout(() => {
    svgWrapper.classList.add('on');
  }, totalAnimationTime);

  setTimeout(() => {
    header.classList.add('visible');
    flipTxt.classList.add('visible');
  }, totalAnimationTime + 1000);
});



if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});




// line --------------------------------------------------------------
const target = document.querySelector('.line');
const target2 = document.querySelector('.line2');
const observerLine = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

observerLine.observe(target);
observerLine.observe(target2);

// tool animation --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('.html_svg');

  paths.forEach((path, index) => {
    const delay = (Math.random() * 2).toFixed(2); // 0~2초 랜덤
    path.style.animationDelay = `${delay}s`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('.css_svg');

  paths.forEach((path, index) => {
    const delay = index * 0.2;
    path.style.animationDelay = `${delay}s`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('.js_svg');

  paths.forEach((path, index) => {
    const delay = (index * 0.2).toFixed(2);
    path.style.animationDelay = `${delay}s`;
  });
});


// Tool tit --------------------------------------------------------------
const title = document.querySelector('.section02_tit');

// IntersectionObserver로 h2가 화면에 들어오면 축소
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      title.classList.add('shrink');
    }
  });
}, { threshold: 0.1 });

observer2.observe(title);

// 스크롤 방향에 따라 크기 조절
let scales = [1, 1.5, 1.8];
let currentStep = 1; //

window.addEventListener('wheel', (e) => {
  if (title.classList.contains('shrink')) {
    if (e.deltaY < 0) {
      currentStep = Math.min(currentStep + 1, scales.length - 1);
    } else {
      currentStep = Math.max(currentStep - 1, 0);
    }
    title.style.transform = `scale(${scales[currentStep]})`;
  }
});

//Swiper
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: Math.floor(window.innerWidth / 530),
    centeredSlides: false,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".my-button-next",
      prevEl: ".my-button-prev",
    },
  });
});

// 링크 연결
document.querySelectorAll('.swiper-slide').forEach(box => {
  box.addEventListener('click', () => {
    const url = box.dataset.url;
    if (url) window.location.href = url;
  });
});

// 마우스
const tracker = document.getElementById('mouseTracker');
const hoverAreas = document.querySelectorAll('.mouse-area');
const hoverImgs = document.querySelectorAll('.imgSquare');

window.addEventListener('mousemove', (e) => {
  tracker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

hoverAreas.forEach(area => {
  area.addEventListener('mouseenter', () => tracker.classList.add('big'));
  area.addEventListener('mouseleave', () => tracker.classList.remove('big'));
});

hoverImgs.forEach(imgsquare => {
  imgsquare.addEventListener('mouseenter', () => tracker.classList.add('imgsquare'));
  imgsquare.addEventListener('mouseleave', () => tracker.classList.remove('imgsquare'));
});

