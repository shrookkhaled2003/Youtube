
const menuButton = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');


menuButton.addEventListener('click', function() {
  
    sideMenu.style.display = (sideMenu.style.display === 'none' || sideMenu.style.display === '') ? 'block' : 'none';
});
