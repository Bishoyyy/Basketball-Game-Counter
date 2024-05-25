let counterHome = document.querySelector(".counter-home");
let counterGuest = document.querySelector(".counter-guest");
let homeCounter = 0;
let guestCounter = 0;

function addOneHome() {
    homeCounter += 1;
    counterHome.innerHTML = homeCounter;
};

function addTwoHome() {
    homeCounter += 2;
    counterHome.innerHTML = homeCounter;
};

function addThreeHome() {
    homeCounter += 3;
    counterHome.innerHTML = homeCounter;
};

function addOneGuest() {
    guestCounter += 1;
    counterGuest.innerHTML = guestCounter;
};

function addTwoGuest() {
    guestCounter += 2;
    counterGuest.innerHTML = guestCounter;
};

function addThreeGuest() {
    guestCounter += 3;
    counterGuest.innerHTML = guestCounter;
};

function reset() {
    homeCounter = 0;
    guestCounter = 0;
    counterHome.innerHTML = homeCounter;
    counterGuest.innerHTML = guestCounter;
};