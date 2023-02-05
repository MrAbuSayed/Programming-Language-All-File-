

//setTimeout 

setTimeout(function(){
    var dcmt= document.querySelectorAll("h1")[0];
    dcmt.innerText="Hey whatsupp Bro "

},1900);

const btn=document.querySelector(".btn");

var salam=document.querySelector("h2") ;
btn.addEventListener("click",function(){


   salam.innerText=("Assalamo Walaikom")

  setTimeout(function(){

    salam.innerText=(" ")
  },900)

});
//setInterval
const btn1=document.querySelector(".btn1");

var salam1=document.querySelector("h3") ;
btn1.addEventListener("click",function(){

let count=1;
salam1.innerText=count;
setInterval(function(){
count++;
salam1.innerText=count;


},1000)



})



//set a clock.


var wac=document.querySelector(".time");
var timee=document.querySelectorAll("h1") [1];
 
wac.addEventListener("click",function(){
    setInterval(function(){

        let time= new Date();
        let hours=time.getHours();
        let minite=time.getMinutes();
        let second=time.getSeconds();
        let tim= hours +":"+ minite + ":" + second;
        timee.textContent= tim;

    },1000);


});

