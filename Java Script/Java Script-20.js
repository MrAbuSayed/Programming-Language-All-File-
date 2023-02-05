
//complex rule
var num= [13,42,53,45,64];

var nam= num.find(p => p%2===0);
console.log(nam);

//simple rule 

var nom= [31,18,30,15,37,27];
var evnnum = (s) => {

    if(s%2===0)
    return s;
}

var nm= nom.find(evnnum);
console.log(nm);



