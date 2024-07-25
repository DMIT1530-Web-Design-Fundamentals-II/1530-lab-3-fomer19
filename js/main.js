document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav > ul > li');
    menuItems.forEach(function(menuItem) {
        const submenu = menuItem.querySelector('.submenu');
        menuItem.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';
        });
        menuItem.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';
        });
    });
});

