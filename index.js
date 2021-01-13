// selector
let menu = document.querySelector(".hamburger");
let menuppal = document.querySelector(".menuppal");




// method
const toggleMenu = (event) =>{
  menu.classList.toggle('is-active');
  menuppal.classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);




