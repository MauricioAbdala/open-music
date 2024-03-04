const darkMode = () => {
    const btnMode = document.querySelector('.btn__modeTheme');
    const imgMode = document.querySelector('.btn__modeTheme > figure > img');
    const htmlTag = document.querySelector('html');

    const saveMode = JSON.parse(localStorage.getItem('dark__mode'));

    if (saveMode) {
        imgMode.setAttribute('src', './src/assets/img/sun.svg');
        htmlTag.classList.add('dark__mode');
    } else {
        imgMode.setAttribute('src', './src/assets/img/moon.svg');
        htmlTag.classList.remove('dark__mode');
    }

    btnMode.addEventListener('click', () => {
        console.log(btnMode)
        htmlTag.classList.toggle('dark__mode');

        if (htmlTag.classList.contains('dark__mode')) {
            imgMode.setAttribute('src', './src/assets/img/sun.svg');
            localStorage.setItem('dark__mode', true);
        } else {
            imgMode.setAttribute('src', './src/assets/img/moon.svg');
            localStorage.setItem('dark__mode', false);
        };

    });

};
darkMode();