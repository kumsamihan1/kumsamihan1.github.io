const counter = document.querySelector('.counter');

const target = +counter.getAttribute('data-target');
let count = 0;

function updateCounter() {
    const increment = Math.ceil(target / 100);
    count += increment;

    if (count < target) {
        counter.innerText = count;
        setTimeout(updateCounter, 40);
    } else {
        counter.innerText = target + '+';
    }
}

window.addEventListener('load', updateCounter);
