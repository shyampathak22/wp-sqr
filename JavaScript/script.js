let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].className += " active";
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('downloadButton').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '../HTML/resume/Resume.pdf'; // Ensure this path is correct relative to your HTML file
        link.download = 'Resume.pdf'; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});