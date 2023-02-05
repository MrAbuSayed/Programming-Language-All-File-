
//array old rule

var nmbr= [43,12,31,65];

console.log(nmbr[0]);
console.log(nmbr[1]);
console.log(nmbr[2]);



 //array new rule array disstructure

 var nmbr= [32,54,76,87,7,8,59,54,76,5];
 var [nm1,nm2,nm3 , ...nm]=nmbr;
 console.log(nm1);
 console.log(nm2);
 console.log(nm);


 //object old rule

 var worker= {
    nam :"Mia Golam porwar",
     age :51,
     work : "Politician",
     address :'silyte'
 }
 console.log(worker.nam);
 console.log(worker.work)


 // object ne rule  object distructure

 var worker= {
    nam :"dark",
     age :21,
     work : "maker",
     address :'chandina'
 }

 const {nam,age,work,address} = worker;

 console.log(nam);
 console.log(work)


 //distructuring function peramrtare
 
