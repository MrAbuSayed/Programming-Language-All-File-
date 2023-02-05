    //  HTML TAG SELECTOR FOR JQUARY

//  thats make JS --->

//  var tag= document.querySelector("h1").textContent="Hello world"

    // Thats make JQuary --->

    $(".hh").text("Hello World");

//  thats make JS --->
// var tag= document.querySelector(".mydiv h1").textContent="welcome our site"

    // Thats make JQuary --->
    
    // html tag manupolate
    $(".mydiv h1").text("welcome our site");

    $(".para").text("this is para 1");

    $(".para").html("<i> this is para 2 </i>");

    $(".para").append("this is para 3");

    $(".para").prepend("this is para 1");
    
    var mkt=$("<p></p>"). text( "this is para 4")

    $(".h").before(mkt);

    var mkt=$("<p></p>"). text( "this is para 4")
    $(".h").after(mkt);

    // htmlattribute manupolate
  
 //  thats make JS --->
// var attri=document.querySelector("a").getAttribute("href");
//  document.write("This is href="+attri)

 // Thats make JQuary --->
  var attri=$("a").attr("href");
// document.write("This is href="+attri+"<p>")

  var attri=$("a").removeAttr("href");
//   document.write("This is href="+attri+"<p>");

//change attribute  valus 

//  thats make JS --->
// var attri=document.querySelector("a").setAttribute("href","https://github.com/");

 
  // Thats make JQuary --->
  var attri=$("a").attr("href","https://github.com/");


//   CSS STYLE MANIPULATE FOR JQUARY

//  thats make JQUARY --->

$(".head1").css("color","green")
$(".head1").css("font-size","3rem")
$(".head1").css("font-style","italic")

$(".head2").css({"color":"blue","font-size":"3rem","font-style":"italic","font-weight":"bold"})
 

// Add style from css file

//  thats make JS--->

// document.querySelector(".head3").classList.add("head3")


//  thats make JQUARY --->

$(".head").addClass("head3")
// $("head3").removeClass("head3")
 

  


