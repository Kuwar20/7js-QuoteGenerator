const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content; // content is the key in the json file and its value pair is the quote, whereas data is the variable that stores the json file
    author.innerHTML = data.author;
}
getQuote(api_url);
