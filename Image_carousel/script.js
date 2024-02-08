const My_slides = document.querySelectorAll(".slide");
let count = 0;
My_slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});
const Prev = () => {
  if (count == 0) {
    count = 4;
  }
  count--;
  ImageSlide();
};
const Next = () => {
  if (count == 3) {
    count = -1;
  }
  count++;
  ImageSlide();
};
const ImageSlide = () => {
  My_slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
