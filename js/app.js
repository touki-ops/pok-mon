const nav = document.querySelector('nav');
const body = document.querySelector('body');

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == '69') {
		nav.style.display = 'grid'
	} else if(key.keyCode == '90') {
        nav.style.display = 'none'
    }
}