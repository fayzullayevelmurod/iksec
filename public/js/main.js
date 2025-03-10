function formatNumber(number) {
  let reversed = String(number).split('').reverse().join('');
  let formatted = reversed.match(/.{1,3}/g).join(' ');
  return formatted.split('').reverse().join('');
}

const rangeContainer = document.querySelectorAll('.range-container');

if (rangeContainer.length) {
  rangeContainer.forEach(el => {
    const inp = el.querySelector('input[type="range"]');
    const line = el.querySelector('.line');
    const maxVal = +el.querySelector('input[type="range"]').max;
    const valText = el.querySelector('.priceValue');


    const handleLine = () => {
      let val = +inp.value;
      line.style.width = (100 * val) / maxVal + '%';
      valText.textContent = formatNumber(val);
    }

    handleLine();
    
    inp.oninput = e => {
      handleLine()
    }
  })
}

// cooperationSwiper
var swiper = new Swiper(".cooperationSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".cooperation-next",
    prevEl: ".cooperation-prev",
  },
});
