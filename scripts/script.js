// Login
function togglePopup() {
    var popup = document.getElementById('loginPopup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

document.addEventListener('keydown', function (event) {
    var popup = document.getElementById('loginPopup');
    if (event.key === 'Escape' && popup.style.display === 'block') {
        togglePopup();
    }
});

function login() {
    // Voeg hier de logica toe om het wachtwoord te controleren
    // Voor nu sluiten we gewoon de popup
    togglePopup();
}



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

document.documentElement.style.setProperty('--animate-duration', '2.3s');


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
