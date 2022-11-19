{
    const calculateResult = (input, output) => {
        const currencyPair = `${input}/${output}`;
        switch (currencyPair) {
            case "PLN/USD":
                return 0.219260;
            case "PLN/EUR":
                return 0.211613;
            case "USD/PLN":
                return 4.55980;
            case "USD/EUR":
                return 0.964879;
            case "EUR/USD":
                return 1.03640;
            case "EUR/PLN":
                return 4.72511;
            default:
                return 1;
        }
    };

    const updateResultText = (amount, input, value, output, exchangeRate) => {
        const convertedValueElement = document.querySelector(".js-convertedValue");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        convertedValueElement.innerText = `${amount} ${input} = ${value.toFixed(2)} ${output}`;
        exchangeRateElement.innerText = exchangeRate;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");

        const amount = +amountElement.value;
        const input = inputCurrencyElement.value;
        const output = outputCurrencyElement.value;

        const exchangeRate = calculateResult(input, output);

        const value = amount * exchangeRate;

        updateResultText(amount, input, value, output, exchangeRate);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}