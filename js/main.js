window.addEventListener("load", function() {
	var loader = document.getElementById("loader");
	var content = document.getElementById("content");

	loader.style.display = "none";
	content.style.opacity = "1";
});

document.addEventListener('DOMContentLoaded', () => {
  const darkModeSwitch = document.querySelector('.dark-mode-switch');

  darkModeSwitch.addEventListener('click', () => {
    darkModeSwitch.classList.toggle('active');

    document.body.classList.toggle('dark-mode');
  });
});