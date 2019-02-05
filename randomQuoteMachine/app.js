$(document).ready(function() {

});

let body = document.body
let text_div=document.getElementById("text");
let author_div=document.getElementById("author");
let newQuote_div=document.getElementById("new-quote");

let colorList = ["#f993b7", "#8792e5","#a9e587","#f2aeae","#93a4a6",
"#9b81b5","#afeca9","#dbb5f1","#e3f49c"]

function randnElement(list){
  let randn = Math.floor(Math.random()*list.length);
  return list[randn];
}

function updateQuote() {
  let fadeTime = 500;
  let {text,author} = randnElement(quotes);
  $(text_div).fadeOut(fadeTime,function(){
      $(this).text('"'+text+'"').fadeIn(fadeTime);
    });
  $(author_div).fadeOut(fadeTime,function(){
      $(this).text('- '+author).fadeIn(fadeTime);
    });
  $(body).animate({backgroundColor: randnElement(colorList)}, fadeTime*2);

}

function main(){
  $("#new-quote").click(function() {
    updateQuote();
  });
}

main();


//$("#quote-box").css("backgroundColor", "blue");
