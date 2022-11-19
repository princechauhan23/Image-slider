const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
var container = document.getElementById('container');
var counter = 0;

leftbtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 4;
    }
    container.style.marginLeft = "-" + counter * 100 + '%';
});

rightbtn.addEventListener('click', () => {
    counter++;
    if (counter > 4) {
        counter = 0;
    }
    container.style.marginLeft = '-' + counter * 100 + '%';
});
