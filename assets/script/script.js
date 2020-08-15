

const darkModeButton = document.querySelector("#darkModeButton");



darkModeButton.addEventListener('click', function () {
    const changeBodyColor = document.body.style.backgroundColor;
    if (changeBodyColor === 'white') {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})
darkModeButton.addEventListener('click', function () {
    darkModeButton.innerHTML = ('Change to Dark Mode');
    if (document.body.style.backgroundColor === 'black') {
        darkModeButton.innerHTML = ('Change to Light Mode');
    } else {
        darkModeButton.innerHTML = ('Change to Dark Mode')
    }
})

darkModeButton.addEventListener('click', function () {
    const main = document.querySelector('main');
    const changeMainColor = main.style.backgroundColor;
    if (changeMainColor === 'white') {
        main.style.backgroundColor = 'black'
    } else {
        main.style.backgroundColor = 'white'
    }
})

darkModeButton.addEventListener('click', function () {
    const content = document.querySelector('div.content');
    const changeContentColor = content.style.backgroundColor;
    if (changeContentColor === 'rgb(229, 233, 240)') {
        content.style.backgroundColor = 'lightskyblue'
    } else {
        content.style.backgroundColor = 'rgb(229, 233, 240)'
    }
})

darkModeButton.addEventListener('click', function () {
    const article = document.querySelectorAll('article');
    const changeArticleColor0 = article[0].style.backgroundColor;
    if (changeArticleColor0 === 'white') {
        article[0].style.backgroundColor = 'black';
    } else {
        article[0].style.backgroundColor = 'white';
    }
})

darkModeButton.addEventListener('click', function () {
    const article = document.querySelectorAll('article');
    const changeArticleColor1 = article[1].style.backgroundColor;
    if (changeArticleColor1 === 'white') {
        article[1].style.backgroundColor = 'black';
    } else {
        article[1].style.backgroundColor = 'white';
    }
})

darkModeButton.addEventListener('click', function () {
    const article = document.querySelectorAll('article');
    const changeArticleColor2 = article[2].style.backgroundColor;
    if (changeArticleColor2 === 'white') {
        article[2].style.backgroundColor = 'black';
    } else {
        article[2].style.backgroundColor = 'white';
    }
})

darkModeButton.addEventListener('click', function () {
    const articleFont = document.querySelectorAll('p.isi');
    const changeArticleFontColor0 = articleFont[0].style.color;
    if (changeArticleFontColor0 === 'black') {
        articleFont[0].style.color = 'white';
    } else {
        articleFont[0].style.color = 'black';
    }
})

darkModeButton.addEventListener('click', function () {
    const articleFont = document.querySelectorAll('p.isi');
    const changeArticleFontColor1 = articleFont[1].style.color;
    if (changeArticleFontColor1 === 'black') {
        articleFont[1].style.color = 'white';
    } else {
        articleFont[1].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const articleFont = document.querySelectorAll('p.isi');
    const changeArticleFontColor2 = articleFont[2].style.color;
    if (changeArticleFontColor2 === 'black') {
        articleFont[2].style.color = 'white';
    } else {
        articleFont[2].style.color = 'black';
    }
})

darkModeButton.addEventListener('click', function () {
    const articleH2Font = document.querySelectorAll('.content h2');
    const changeArticleH2FontColor0 = articleH2Font[0].style.color;
    if (changeArticleH2FontColor0 === 'black') {
        articleH2Font[0].style.color = 'white';
    } else {
        articleH2Font[0].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const articleH2Font = document.querySelectorAll('.content h2');
    const changeArticleH2FontColor1 = articleH2Font[1].style.color;
    if (changeArticleH2FontColor1 === 'black') {
        articleH2Font[1].style.color = 'white';
    } else {
        articleH2Font[1].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const articleH2Font = document.querySelectorAll('.content h2');
    const changeArticleH2FontColor2 = articleH2Font[2].style.color;
    if (changeArticleH2FontColor2 === 'black') {
        articleH2Font[2].style.color = 'white';
    } else {
        articleH2Font[2].style.color = 'black';
    }
})

darkModeButton.addEventListener('click', function () {
    const postInfo = document.querySelectorAll('.content .ost-inf');
    const changePostInfoFontColor0 = postInfo[0].style.color;
    if (changePostInfoFontColor0 === 'black') {
        postInfo[0].style.color = 'white';
    } else {
        postInfo[0].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const postInfo = document.querySelectorAll('.content .ost-inf');
    const changePostInfoFontColor1 = postInfo[1].style.color;
    if (changePostInfoFontColor1 === 'black') {
        postInfo[1].style.color = 'white';
    } else {
        postInfo[1].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const postInfo = document.querySelectorAll('.content .ost-inf');
    const changePostInfoFontColor2 = postInfo[2].style.color;
    if (changePostInfoFontColor2 === 'black') {
        postInfo[2].style.color = 'white';
    } else {
        postInfo[2].style.color = 'black';
    }
})

darkModeButton.addEventListener('click', function () {
    const aside = document.querySelector('aside');
    const changeAsideColor = aside.style.backgroundColor;
    if (changeAsideColor === 'white') {
        aside.style.backgroundColor = 'lightskyblue'
    } else {
        aside.style.backgroundColor = 'white'
    }
})
darkModeButton.addEventListener('click', function () {
    const figure = document.querySelector('figure');
    const changeFigureColor = figure.style.backgroundColor;
    if (changeFigureColor === 'rgb(229, 233, 240)') {
        figure.style.backgroundColor = 'lightskyblue';
    } else {
        figure.style.backgroundColor = 'rgb(229, 233, 240)'
    }
})

darkModeButton.addEventListener('click', function () {
    const profile = document.getElementsByClassName('penulis');
    const changeProfileColor = profile[0].style.backgroundColor;
    if (changeProfileColor === 'white') {
        profile[0].style.backgroundColor = 'black';
    } else {
        profile[0].style.backgroundColor = 'white'
    }
})

darkModeButton.addEventListener('click', function () {
    const fontAside = document.querySelectorAll('aside figure p');
    const changeFontAsideColor0 = fontAside[0].style.color;
    if (changeFontAsideColor0 === 'black)') {
        fontAside[0].style.color = 'white';
    } else {
        fontAside[0].style.color = 'black';
    }
})
darkModeButton.addEventListener('click', function () {
    const fontAside = document.querySelectorAll('aside figure p');
    const changeFontAsideColor1 = fontAside[1].style.color;
    if (changeFontAsideColor1 === 'black') {
        fontAside[1].style.color = 'white';
    } else {
        fontAside[1].style.color = 'black)';
    }
})
darkModeButton.addEventListener('click', function () {
    const fontAside = document.querySelectorAll('aside figure p');
    const changeFontAsideColor2 = fontAside[2].style.color;
    if (changeFontAsideColor2 === 'black') {
        fontAside[2].style.color = 'white';
    } else {
        fontAside[2].style.color = 'black';
    }
})

darkModeButton.addEventListener('click', function () {
    const fontPProflie = document.querySelector('aside .deskripsi p');
    const changeFontPProfile = fontPProflie.style.color;
    if (changeFontPProfile === 'black') {
        fontPProflie.style.color = 'white'
    } else {
        fontPProflie.style.color = 'black';
    }
})