
document.querySelector('.myButton').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.formulario').style.cssText = 'opacity: 1; visibility: visible;';
    document.querySelector('.containerbig').style.background = '#cc683c';
});


document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('.formulario').style.cssText = 'opacity: 0; visibility: hidden;';
    document.querySelector('.containerbig').style.cssText =  'opacity: 1; visibility: visible;';
        'background-image: url(../img/pexels-stephen-+-alicia-2554536.jpg)';
});