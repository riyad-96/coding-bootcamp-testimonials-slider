const slides = document.querySelectorAll(".person")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

let move = 0

function moveSlide(nextOrPrevValue) {
  move = (nextOrPrevValue + slides.length) % slides.length
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${move * 100}%)`
  })
}

nextBtn.addEventListener("click", () => moveSlide(move + 1))
prevBtn.addEventListener('click', () => moveSlide(move - 1))