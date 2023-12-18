document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    // Scroll event listener 
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        // If scrolled far enough nav receives class sticky-nav
        if (scrollPosition > 150) {
            nav.classList.add('sticky-nav');
        } else {
            nav.classList.remove('sticky-nav');
        }
    });
});

document.documentElement.style.setProperty('--animate-duration', '2s');




// Get all the tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    // Add onclcik event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');
    });
});


// Display success message for contact form
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');
    
// Display success message for contact form
if (status === 'success') {
    var msgElement = document.getElementById('contact-message');
    msgElement.innerHTML = "Bericht succesvol verzonden!"
}
