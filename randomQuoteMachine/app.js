let text = 'XD';
let author = 'ME';
let text_div=document.getElementById("text");
let author_div=document.getElementById("author");
let newQuote_div=document.getElementById("new-quote");

function updateQuote() {
  let randn = Math.floor(Math.random()*quotes.length);
  quote = quotes[randn];
  text_div.innerHTML = '"'+quote.text+'"';
  author_div.innerHTML = '- '+quote.author;
}

function main(){
  updateQuote();
  newQuote_div.addEventListener('click', function() {
    updateQuote();
  })
}

main();
