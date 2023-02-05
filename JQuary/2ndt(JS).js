// Using Event listener For JQuary


// thats make JS
// document.querySelector(".btn").addEventListener("click",()=>{
     
//     document.querySelector("h1").innerText="hello Ami sayed"
   
// })

// thats make JQuary

// $(".b1").click(function () {
//     $("h2").removeClass("style")
//  })

 $(".b").click(function () {
    $("h2").toggleClass("style")
 })
 
 $(".b").click(function () {
    $("h2").text("I am a man")
 })
 
   
//  login demo

$("#lgb").click(()=>{
    
     
   var pas1=$("#pass1").val();
   var pas2=$("#pass2").val();

   $("#p").text(pas1+pas2)

   // if(pas1!="" && pas2!=""){

   //   if(pas1==pas2){
   //      $("#p").text("Successfilly Login")
   //      setTimeout(() => {
   //          $("#p").text("")
   //      }, 3000);
   //   }else{
   //      $("#p").text(" Your password is uncorrect")
   //      setTimeout(() => {
   //          $("#p").text("")
   //      }, 3000);
   //   }
   // } else{

   //  $("#p").text("Please Inter your Password")
   //   setTimeout(() => {
   //      $("#p").text("")
   //   }, 3000);
   // }



})



// Animation part of jQuary
         // Animation --- hide ,show,toggle
     $(".btn").click(()=>{
         $(".mydiv").toggle(1000);
     })
 

      // Animation --- fadeIn,fadeOut,fadeToggle

      $(".btn1").click(()=>{
        $(".mydiv1").fadeToggle(4000);
    })


     // Animation --- slideUp,slideDown,slideToggle

     $(".btn2").click(()=>{
        $(".mydiv2").slideToggle(1000);
    })

    // Animation ---animte 

    $(".btn3").click(()=>{
        $(".mydiv3").animate({
            fontSize:"5rem",
            width:"100%",
    },2000);
    })