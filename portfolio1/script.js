// Fade-in effect on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const isElementInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const handleScroll = () => {
    fadeInElements.forEach((element) => {
        if (isElementInView(element)) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide scroll-to-top button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
