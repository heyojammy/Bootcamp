

const movieQuote = require("popular-movie-quotes");
console.log(movieQuote.getRandomQuote());
console.log(movieQuote.getQuotesByMovie("Joker"));
console.log(movieQuote.getQuoteByYear(2020, 2021));


console.log(movieQuote.getQuotesByMovie("The Great Gatsby"));