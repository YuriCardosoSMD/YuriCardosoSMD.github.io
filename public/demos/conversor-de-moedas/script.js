document.addEventListener("DOMContentLoaded", function () {
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
  
    // Use a free API key from https://www.exchangerate-api.com/ when implementing this in a real project
    const apiKey = "YOUR_EXCHANGE_RATE_API_KEY";
    const endpoint = `https://open.er-api.com/v6/latest/${apiKey}`;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const currencies = Object.keys(data.rates);
  
        currencies.forEach((currency) => {
          const option1 = document.createElement("option");
          option1.value = currency;
          option1.text = currency;
          fromCurrency.add(option1);
  
          const option2 = document.createElement("option");
          option2.value = currency;
          option2.text = currency;
          toCurrency.add(option2);
        });
      })
      .catch((error) => console.error("Error fetching currency data", error));
  });
  
  function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    const query = `${fromCurrency}_${toCurrency}`;
  
    // Use a free API key from https://www.exchangerate-api.com/ when implementing this in a real project
    const apiKey = "YOUR_EXCHANGE_RATE_API_KEY";
    const conversionEndpoint = `https://open.er-api.com/v6/convert/${apiKey}?q=${query}&compact=y`;
  
    fetch(conversionEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const rate = data[query].val;
        const result = (amount * rate).toFixed(2);
        document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
      })
      .catch((error) => console.error("Error fetching conversion data", error));
  }
  