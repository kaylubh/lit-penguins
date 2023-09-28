'use strict'

// poll user about penguins

function penguinPoll(){
    let answer = prompt('Do you like penguins?');
    answer = answer.toLowerCase();
    let welcomeMessage;
    if (answer == 'yes') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'yea') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'ya') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'yep') {
        welcomeMessage = 'Me Too!';
    } else if (answer == 'potato') {
        welcomeMessage = 'Potato is Free!';
    } else {
        alert('Try Again! (The Correct Answer is "Yes")');
        penguinPoll();
    }
    if (typeof welcomeMessage === 'string') {
        alert(welcomeMessage);
    }
}

penguinPoll();

// expand and collapse news articles

function expandAndCollapseArticles(articleNum){
    let article = document.getElementById('article-' + articleNum);
    let button = document.getElementById('article-' + articleNum + '-button');
    if (article.classList.contains('collapse')){
        article.classList.remove('collapse');
        button.innerHTML = 'Show Less';
    } else {
        article.classList.add('collapse');
        button.innerHTML = 'Read More';
    }
}