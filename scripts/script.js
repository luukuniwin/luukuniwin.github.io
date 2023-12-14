document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
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



$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });