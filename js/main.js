let showBtn = document.getElementById( "covershower");
let coverScreen = document.getElementById("CoveronScreen");


showBtn.addEventListener("click", function(){
  coverScreen.classList.remove("OnOfAll");
  coverScreen.classList.add("OnOfAllopposite");
})
// showBtn.addEventListener("click", function(){
//   coverScreen.style.display === "block";
// })


let crossBtn = document.getElementById( "bigCrossBtn");
crossBtn.addEventListener("click", function(){
  coverScreen.classList.remove("OnOfAllopposite");
  coverScreen.classList.add("OnOfAll");
})


const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// let goTop2=document.getElementById('.goTopBtn2')
let goTop2=document.getElementById('goTopBtn2');

let currentIndex = 0;
const totalSlides = slideItems.length;

function updateSlider() {
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider();
  });
});

updateSlider();



let goTop=document.getElementById('goTopBtn');
goTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        bahavior:"smooth"});
})
goTop2.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        bahavior:"smooth"});
})



const track5 = document.querySelector('.image-track5');
const prev5 = document.querySelector('.prev5');
const next5 = document.querySelector('.next5');
const slideWidth5 = 32; // 300px + 10px margin
const slides5 = document.querySelectorAll('.slide-img5');
const totalSlides5 = slides5.length;

let currentIndex5 = 0;
const visibleSlides5 = 3;
const maxIndex5 = totalSlides5 - visibleSlides5;

const dots5 = document.querySelectorAll('.dot5');

function updateSlider5() {
  track5.style.transform = `translateX(-${currentIndex5 * slideWidth5}vw)`;
  updateDots5();
}

function updateDots5() {
  dots5.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex5);
  });
}

next5.addEventListener('click', () => {
  if (currentIndex5 < maxIndex5) {
    currentIndex5++;
    updateSlider5();
  }
});

prev5.addEventListener('click', () => {
  if (currentIndex5 > 0) {
    currentIndex5--;
    updateSlider5();
  }
});

dots5.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    currentIndex5 = index;
    updateSlider5();
  });
});

updateSlider5();











