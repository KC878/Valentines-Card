$(document).ready(function(){
  $(".container").mouseenter(function(){
    $(".card").stop().animate({
      top: "-90px"
    },"slow");
  }).mouseleave(function(){
    $(".card").stop().animate({
      top:0
    }, "slow");
  });
});


const readLetter = document.querySelector("read-button");

const doneLetter = document.querySelector("close-button");

 

function closeLetter(){
  window.close("./letter.html", "_blank");
}
  
