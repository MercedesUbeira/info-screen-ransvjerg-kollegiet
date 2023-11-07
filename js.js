


//carousel NOT WORKING YET

document.addEventListener("DOMContentLoaded", function() {
    var carouselTrack = document.querySelector('.carousel-track');
    new Dragdealer(carouselTrack, {
        steps: 3,
        speed: 0.3,
        loose: true,
        requestAnimationFrame: true
    });
});

// JavaScript code for the 404 error page

// Function to handle the "GO HOME" button click
function goHome() {
    window.location.href = 'home.html';
}

// Attach a click event listener to the "GO HOME" button
document.addEventListener('DOMContentLoaded', function () {
    const goHomeButton = document.querySelector('.go-home-button');
    if (goHomeButton) {
        goHomeButton.addEventListener('click', goHome);
    }
});
