
//make a game

var win =0;
var lost=0;

for(var p=1;p<=5;p++  ){

    var agame= parseFloat(prompt("Enter a number = "));
    var random = Math.floor(Math.random()*agame +1);
  
    
    if(agame==random){
        document.write("you are win = "+random +"<br>");
    win++;
    }
    else{
        document.write("you are lost = "+random +"<br>");
        lost++
    }
    


}
document.write(" <h1> collection of result </h1>  win = "+win +"<br>");

document.write("  lost = "+lost +"<br>");
