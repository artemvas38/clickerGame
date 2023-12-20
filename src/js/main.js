let moneyButton = document.querySelector(`.money_button`);

let moneyCount = document.querySelector(`.money_count`);

let money = 0;

let moneyPerClick = 1;

let upgradeItem1 = document.querySelector(`#item_upgrade1`);
let upgradeItem2 = document.querySelector(`#item_upgrade2`);

let upgradeItem1Text = document.querySelector(`#item_upgrade1_text`);
let upgradeItem2Text = document.querySelector(`#item_upgrade2_text`);

let upgradeItem1Cost = 10;
let upgradeItem2Cost = 30;

let timer;

function StartGame() {
    upgradeItem1Text.innerHTML = `${upgradeItem1Cost}$`;
    upgradeItem2Text.innerHTML = `${upgradeItem2Cost}$`;
    moneyCount.innerHTML = `${money}$`;
}

moneyButton.addEventListener(`click`, function () {
    money += moneyPerClick;
    moneyCount.innerHTML = `${money}$`;
})

function timerFunc() {
    money++;
    moneyCount.innerHTML = `${money}$`;
}

upgradeItem1.addEventListener(`click`, function () {
    if (money >= upgradeItem1Cost) {
        timer = setInterval(timerFunc, 1000);
        money -= upgradeItem1Cost;
        upgradeItem1Text.innerHTML = `${upgradeItem1Cost}$`;
        moneyCount.innerHTML = `${money}$`;
        upgradeItem1Cost = Math.round(upgradeItem1Cost * 1.25);
    }
})

upgradeItem2.addEventListener(`click`, function() {
    if (money >= upgradeItem2Cost) {
        money -= upgradeItem2Cost;
        upgradeItem2Text.innerHTML = `${upgradeItem2Cost}$`;
        moneyPerClick++;
        moneyCount.innerHTML = `${money}$`;
        upgradeItem2Cost = Math.round(upgradeItem2Cost * 1.1);
    }
})

StartGame();