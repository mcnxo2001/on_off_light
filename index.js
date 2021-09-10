var swich = document.getElementById('switch');
var switch_button = document.getElementById('switch_button');
var light = document.getElementById('light');
var mc = document.getElementById('mc');
var i = 0;
switch_button.addEventListener('click', function () {
    if (i == 0) {
        swich.style.backgroundColor = 'rgb(64, 240, 47)';
        switch_button.style.backgroundColor = 'rgb(64, 190, 47)';
        switch_button.style.marginLeft = '2.6rem';
        light.style.animationName = 'show';
        light.style.opacity = '1';
        mc.style.animationName = 'show';
        mc.style.opacity = '1';
        i = 1;
    }
    else {
        swich.style.backgroundColor = 'gray';
        switch_button.style.backgroundColor = 'rgba(255, 255, 255, 0.616)';
        switch_button.style.marginLeft = '0.2rem';
        light.style.animationName = 'fade';
        light.style.opacity = '0';
        mc.style.animationName = 'fade';
        mc.style.opacity = '0';
        i = 0;
    }

})
