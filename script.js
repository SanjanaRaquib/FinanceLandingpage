document.addEventListener("DOMContentLoaded", function () {
    const scrollSection = document.querySelector(".scroll-section");

    window.addEventListener("scroll", function () {
        const sectionPos = scrollSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            scrollSection.classList.add("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        tabs.forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    showSlide(currentIndex);
    startAutoSlide();
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false;

    function runCounterAnimation() {
        if (!hasAnimated) {
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const increment = target / 100; // Adjust speed
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            });
            hasAnimated = true;
        }
    }

    function handleScroll() {
        const section = document.querySelector(".stats-section");
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            runCounterAnimation();
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
});
