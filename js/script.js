let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let convertedValueElement = document.querySelector(".js-convertedValue");
let form = document.querySelector(".form");
let exchangeRateElement = document.querySelector(".js-exchangeRate");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountButString = amountElement.value;
    let amount = Number(amountButString).toFixed(2);
    let input = inputCurrencyElement.value;
    let output = outputCurrencyElement.value;

    switch (inputCurrencyElement.value) {
        case "PLN":
            if (output === "USD") {
                let exchangeRate = 0.219260;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "EUR") {
                let exchangeRate = 0.211613;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "PLN") {
                let exchangeRate = 1;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
        case "USD":
            if (output === "USD") {
                let exchangeRate = 1;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "EUR") {
                let exchangeRate = 0.964879;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "PLN") {
                let exchangeRate = 4.55980;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
        case "EUR":
            if (output === "USD") {
                let exchangeRate = 1.03640;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "EUR") {
                let exchangeRate = 1;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }
            if (output === "PLN") {
                let exchangeRate = 4.72511;
                let value = amount * exchangeRate;
                convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
                exchangeRateElement.innerText = exchangeRate;
                break;
            }

    }
})

