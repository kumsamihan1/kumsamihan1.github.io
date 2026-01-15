const counter = document.querySelector('.counter');
const target = +counter.getAttribute('data-target');

let count = 0;
const speed = 80;

const updateCounter = () => {
    count += Math.ceil(target / 100);
    if (count < target) {
        counter.innerText = count;
        setTimeout(updateCounter, speed);
    } else {
        counter.innerText = target + '+';
    }
};

window.addEventListener('load', updateCounter);
