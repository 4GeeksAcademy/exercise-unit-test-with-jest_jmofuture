console.log("Hello World")

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))




let oneEuroIs = {

    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87   
};

const fromDollarToYen = (dollarAmount) => {

    let euros = dollarAmount / oneEuroIs["USD"];
    let yen = euros * oneEuroIs["JPY"];
    return parseFloat(yen.toFixed(2));
};


const fromEuroToDollar = (euroAmount) => {

    let dollars = euroAmount * oneEuroIs["USD"];
    return parseFloat(dollars.toFixed(2));
};


const fromYenToPound = (yenAmount) => {

    let euros = yenAmount / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return parseFloat(pounds.toFixed(2));
};


module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };