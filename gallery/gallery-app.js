'use strict'

// get the user input for the number of each penguin to display

function getCount(){
    let emperorCount = (document.getElementById('emperor')).value;
    if (emperorCount > 5) {
        emperorCount = 5;
    } // emperor penguin user input
    let chinstrapCount = (document.getElementById('chinstrap')).value;
    if (chinstrapCount > 5) {
        chinstrapCount = 5;
    } // chinstrap penguin user input
    let macaroniCount = (document.getElementById('macaroni')).value;
    if (macaroniCount > 5) {
        macaroniCount = 5;
    } // macaroni penguin user input
    let littleCount = (document.getElementById('little')).value;
    if (littleCount > 5) {
        littleCount = 5;
    } // little penguin user input
    let hungryCount = (document.getElementById('hungry')).value;
    if (hungryCount > 5) {
        hungryCount = 5;
    } // hungry penguin user input
    createColony(emperorCount, chinstrapCount, macaroniCount, littleCount, hungryCount);
}

// repeat each penguin image based on the user input

function createColony(emperorCount, chinstrapCount, macaroniCount, littleCount, hungryCount){
    let colonyGallery = document.getElementById('colony-gallery');
    colonyGallery.innerHTML = ''; //clears current images
    for (let i = 1; i <= emperorCount; i++){
        colonyGallery.innerHTML += '<img src="../images/gallery/emperor.jpg" alt="emperor penguin">';
    } // adds emperor images
    for (let i = 1; i <= chinstrapCount; i++){
        colonyGallery.innerHTML += '<img src="../images/gallery/chinstrap.jpg" alt="chinstrap penguin">';
    } // adds chinstrap images
    for (let i = 1; i <= macaroniCount; i++){
        colonyGallery.innerHTML += '<img src="../images/gallery/macaroni.jpg" alt="macaroni penguin">';
    } // adds macaroni images
    for (let i = 1; i <= littleCount; i++){
        colonyGallery.innerHTML += '<img src="../images/gallery/little.jpg" alt="little penguin">';
    } // adds little images
    for (let i = 1; i <= hungryCount; i++){
        colonyGallery.innerHTML += '<img src="../images/gallery/hungry.jpg" alt="hungry penguin, a penguin plush looking into a fridge">';
    } // adds hungry images
}