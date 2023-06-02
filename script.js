const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
const desc = document.getElementById('desc');
var container = document.getElementById('container');
var counter = 0;
var arr = ["mountain", "beach", "city", "forest", "desert"];


leftbtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 4;
    }
    container.style.marginLeft = "-" + counter * 100 + '%';
    desc.innerHTML = arr[counter];
});
//  right button
rightbtn.addEventListener('click', () => {
    counter++;
    if (counter > 4) {
        counter = 0;
    }
    container.style.marginLeft = '-' + counter * 100 + '%';
    desc.innerHTML = arr[counter];
});


// automate the slider
setInterval(() => {
    counter++;
    if (counter > 4) {
        counter = 0;
    }
    container.style.marginLeft = '-' + counter * 100 + '%';
    // add transition
    container.style.transition = 'all 1s ease-in-out';
    desc.innerHTML = arr[counter];
}, 4000);