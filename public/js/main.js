document.querySelectorAll(".range-container").forEach(container => {
  const slider = container.querySelector(".rangeSlider");
  const priceValue = container.querySelector(".priceValue");
  const progressBar = container.querySelector(".progressBar");
  const thumb = container.querySelector(".thumb");

  function updateSlider() {
      const val = slider.value;
      const min = slider.min;
      const max = slider.max;
      const percent = ((val - min) / (max - min)) * 100;

      priceValue.textContent = (val * 1200).toLocaleString(); // Raqamni formatlash

      progressBar.style.width = percent + "%";
      thumb.style.left = `calc(${percent}% - 10px)`;
  }

  slider.addEventListener("input", updateSlider);
  updateSlider(); // Boshlang'ich holatni o'rnatish
});



// cooperationSwiper
var swiper = new Swiper(".cooperationSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".cooperation-next",
    prevEl: ".cooperation-prev",
  },
});
