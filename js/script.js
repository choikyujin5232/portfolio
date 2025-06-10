
// 첫 화면
window.addEventListener('load', function() {
  const flipPaths = document.querySelectorAll('.flip-path');
  const clsPaths = document.querySelectorAll('.cls-1');
  const svgWrapper = document.querySelector('.section01_inner_top');
  const header = document.getElementById('header');
  const flipTxt = document.querySelector('.flip_txt');

  // 1. flip-path 순차 등장
  flipPaths.forEach((path, index) => {
    path.style.transitionDelay = `${index * 0.05}s`;
    path.classList.add('active');
  });

  // 2. cls-1 순차 등장
  clsPaths.forEach((path, index) => {
    setTimeout(() => {
      path.classList.add('active');
    }, index * 40);
  });

  // 3. 모든 SVG 애니메이션 끝난 후 svg 통째로 위로 이동 + header/flip_txt 등장 --------------------------------------------------------------
  const totalAnimationTime = (flipPaths.length * 30 + clsPaths.length * 25) + 700;


  setTimeout(() => {
    svgWrapper.classList.add('on'); // svg 위로 올라가면서 사라짐
  }, totalAnimationTime);

  setTimeout(() => {
    header.classList.add('visible');
    flipTxt.classList.add('visible');
  }, totalAnimationTime + 1000); // svg 이동 후 조금 기다렸다가 보여줌
});

// line --------------------------------------------------------------
const target = document.querySelector('.line');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1 // 요소가 50% 이상 보이면 발동
});  

observer.observe(target);

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
}, { threshold: 0.3 });

observer2.observe(title);

// 스크롤 방향에 따라 크기 조절
let scales = [1, 1.5, 1.8]; // 3단계 scale 설정
let currentStep = 1; //

window.addEventListener('wheel', (e) => {
  if (title.classList.contains('shrink')) {
    if (e.deltaY < 0) {
      // 위로 스크롤 ➔ 다음 단계로 이동 (커지기)
      currentStep = Math.min(currentStep + 1, scales.length - 1);
    } else {
      // 아래로 스크롤 ➔ 이전 단계로 이동 (작아지기)
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
