 

  
  //dynamic style

  function fststp(){

  var mstl= document.querySelector("#ps");

  mstl.classList.add("parst");

  }

  function lststp(){

    var mstl= document.querySelector("#ps");
  
    mstl.classList.remove("parst");
  
    }


    function fst(){
 
      var nm =document.querySelector("#hh");
      nm.innerHTML=("He is TArek")

    }

    function sec(){

        var nm =document.querySelector("#hh");
        nm.innerHTML=("She is Rabeya")
  
      }

      function trd(){

        var nm =document.querySelector("#hh");
        nm.innerHTML=("They are akib,jahid ,mamun")
  
      }

      var h=document.querySelector(".h");
      h.addEventListener("click",evntlsnr());

      function evntlsnr() {
 
        h.classList.add("hp");

      }






