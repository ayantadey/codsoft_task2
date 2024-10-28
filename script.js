// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => showItem(currentIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showItem(currentIndex - 1));

function showItem(index) {
    items[currentIndex].classList.remove('active');
    currentIndex = (index + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

// Auto-rotate carousel every 5 seconds
setInterval(() => showItem(currentIndex + 1), 5000);
