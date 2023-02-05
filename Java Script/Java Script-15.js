


 
const bnt = document.querySelector(".btn");
bnt.addEventListener("click", function(){
 
var h=document.getElementsByTagName("h1")[0];
h.innerHTML=("ABu sayed");

 
});

const bnt1 = document.querySelector(".btn1");
bnt1.addEventListener("click", function(){

    console.log("It was not clicked");


});

const bnt2 = document.querySelector(".btn2");
bnt2.addEventListener("click", function(){

    console.log("It not was clicked");


});

const ado= document.querySelector("audio")[0];
ado.addEventListener("play", function(){

  console.log("pldfh");

});