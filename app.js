'use strict'

// ask user about penguins

let answer;
let welcomeMessage;

answer = prompt('Do you like penguins?');

    if (answer == 'yes') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'yea') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'ya') {
        welcomeMessage = 'Me Too!';
    } else {
        welcomeMessage= 'That is Too Bad!';
    }

alert(welcomeMessage);

// expand news articles

let article;
let button;

function collapseAllArticles () {
    article = document.getElementById('article-1');
    article.classList.add('collapse');
    button = document.getElementById('article-1-button');
    button.innerHTML = 'Read More';
    article = document.getElementById('article-2');
    article.classList.add('collapse');
    button = document.getElementById('article-2-button');
    button.innerHTML = 'Read More';
    article = document.getElementById('article-3');
    article.classList.add('collapse');
    button = document.getElementById('article-3-button');
    button.innerHTML = 'Read More';
}

window.onload = collapseAllArticles;

let expand;

function expandArticle1 () {
    expand = document.getElementById('article-1');
    expand.classList.remove('collapse');
}

function expandArticle2 () {
    expand = document.getElementById('article-2');
    expand.classList.remove('collapse');
}

function expandArticle3 () {
    expand = document.getElementById('article-3');
    expand.classList.remove('collapse');
}

