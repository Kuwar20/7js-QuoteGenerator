const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;  // content is the key in the json file and its value pair is the quote, whereas data is the variable that stores the json file
        author.innerHTML = data.author;
    } catch (error) {
        console.error("Error fetching quote:",error);
    } 
}
getQuote(api_url);


function tweetQuote(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+" - "+author.innerHTML+"" ,
    "Tweet Window","width=600,height=400")
}