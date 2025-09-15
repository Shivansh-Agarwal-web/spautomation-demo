document.addEventListener('DOMContentLoaded', function() {

    // Select all elements with the .fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // triggers when 10% of the element is visible
    };

    // Callback function to execute when an element is intersecting
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the .visible class to trigger the animation
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible to save resources
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each of the selected elements
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});
