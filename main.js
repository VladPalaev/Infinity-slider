const listSlide = document.querySelectorAll('.slider-img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let currentSlide = 0;
slider();

function slider() {
	listSlide.forEach(item => item.classList.add('opacity0'));
	listSlide[currentSlide].classList.remove('opacity0');
}

btnLeft.addEventListener('click', function() {
	if (currentSlide - 1 === -1) {
		currentSlide = listSlide.length - 1;
	} else {
		currentSlide--;
	}

	slider();
});

btnRight.addEventListener('click', function() {
	if (currentSlide + 1 === listSlide.length) {
		currentSlide = 0;
	} else {
	currentSlide++;
	}

	slider();
})