//Browser model object (BOM)

        

///uses location poperty

let losn=document.querySelector(".locsn");

let p1=losn.children[0];
p1.textContent=location.href;

let p2=losn.children[1];
p2.textContent=location.protocol;

let p3=losn.children[2];
p3.textContent=location.hostname;

let p4=losn.children[3];
p4.textContent=location.pathname;

//uses asign
var bnt=document.querySelector(".btn");
bnt.addEventListener("click", function(){

location.assign("file:///C:/Users/User/Desktop/Programming%20language/CSS/Social/Social.html");


});
