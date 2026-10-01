let quote = document.getElementById('quote');
let autor = document.getElementById('autor');
let btn = document.getElementById('btn');

console.log(quote);
console.log(autor);
console.log(btn);

async function getQuote() {
    try {
        let result = await fetch('https://dummyjson.com/quotes/random');

        let data = await result.json();

        console.log(data);

        quote.innerHTML = data.quote;
        autor.innerHTML = data.author; 

    } catch (error) {
        console.log("eror : " + error); 
    }
}

getQuote();


