document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 150) {
            nav.classList.add('sticky-nav');
        } else {
            nav.classList.remove('sticky-nav');
        }
    });
});



// Get all the tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');
    });
});


// Parse the URL to get the value of the 'status' parameter
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

// Check if the 'status' parameter is present and display the message accordingly
if (status === 'success') {
    // Display success message
    alert('Successfully sent!');
} else if (status === 'error') {
    // Display error message
    alert('Error sending the form. Please try again.');
}
