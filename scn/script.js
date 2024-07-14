// scripts.js

// Function to toggle menu visibility in mobile view
function toggleMenu() {
    var menuItems = document.querySelectorAll('.menu-item');
    var menuIcon = document.querySelector('.menu-icon');

    if (menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('active');
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });
    } else {
        menuIcon.classList.add('active');
        menuItems.forEach(function(item) {
            item.classList.add('active');
        });
    }
}

    // Function to toggle menu visibility in mobile view
    function toggleMenu() {
        var menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(function(item) {
            item.classList.toggle('active');
        });
    }
