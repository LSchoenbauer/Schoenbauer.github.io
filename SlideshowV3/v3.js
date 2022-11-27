let sources = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.jpg",
    "./img/img9.jpg",
    "./img/img10.jpg",
    "./img/img11.jpg"
]

let images = document.getElementsByClassName('img');
let currentIndex = 0;
generateImages();
let sliderTimer = setInterval(slideRight, 5000);

function generateImages() {
    for (let i = 0; i < 5; ++i) {
        images[i].src = sources[i];
    }
}

function slideLeft() {
    clearInterval(sliderTimer);
    let temp = sources[0];
    for (let i = 0; i < sources.length-1; ++i) {
        sources[i] = sources[i+1];
    }
    sources[sources.length-1] = temp;

    generateImages();
    sliderTimer = setInterval(slideLeft, 5000);
}

function slideRight() {
    clearInterval(sliderTimer);
    let temp = sources[sources.length-1];
    for (let i = sources.length-1; i > 0; --i) {
        sources[i] = sources[i-1];
    }
    sources[0] = temp;

    generateImages();
    sliderTimer = setInterval(slideRight, 5000);
}