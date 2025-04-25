// script.js
var slideIndex = 0;

function showSlides() {
    var slides = document.querySelectorAll('.slide');
    
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();