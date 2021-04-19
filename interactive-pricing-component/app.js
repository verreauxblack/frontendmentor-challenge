// const pageView = document.getElementById("pageViews");
// const yearlyBilling = document.getElementById("yearlyBilling")

// var t = 0;

// const pages = () => {
//     document.getElementById("pages").innerHTML = t++
// }
// console.log(yearlyBilling)


const page = [10,50,100,500,1]
const price = [8,12,16,24,36]

var pageView = document.querySelector('input[type="range"]');
var yearlyBilling = document.querySelector('input[type="checkbox"]');

console.log(pageView, yearlyBilling);

const pages = document.getElementById("pages");
const prices = document.getElementById("price");

// console.log("pages",pages.value)

pageView.oninput = () => {
    pageViews();
}

function pageViews() {
    switch (pageView.value){
        case 0:
            pagePrint(0);
        case 1:
            pagePrint(1);
        case 2:
            pagePrint(2);
        case 3:
            pagePrint(3);
        case 4:
            pagePrint(4);
    }
}

function pagePrint (value){
    pages.innerHTML = page[value] + " ";
    prices.innerHTML = "$"+ price[value] + ".00";
}