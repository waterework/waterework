$(document).ready(function(){
    
//WHEN CLICKING GEARS
    $("#gears").click(function(){  

    	$(this).addClass("hide");
    	$("#logo").removeClass("hide");
        $("#heart").removeClass("hide");
    	
    	$(".topbox").css("right","-30px");
    	$(".topbox").css("border-color","rgba(152,221,222,0.8)");
    	$(".topbox").css("background","url(gears.svg)");
    	$(".topbox").css("background-position","center");
    	$(".topbox").css("background-size","85%");
    	
    	$(".bottombox").css("right","-30px");
    	$(".bottombox").css("border-color","rgba(152,221,222,0.8)");

        $("#coverbox").css("right","-27px");
        $("#coverbox").css("border-color","rgba(152,221,222,0.8)");


    	
    	$(".firstbox").css("border-color","rgba(152,221,222,0.8)");
    	$(".header").css("color","rgba(152,221,222,0.8)");
    	$(".hea").css("background-color","rgba(152,221,222,0.8)");


    	// Cambiando el texto    	
    	$("#wi").html("Conoce los equipos");
    	$("#wa").html("Los equipos de ahora");
    	$("#wd").html("Los que siguen trabajando");
    	$("#hw").html("Otros que trabajan");

    	//REMOVE
    	//$(".p").remove();
        $(".p").addClass("hide");
    	$(".guide2").addClass("hide");

        //CAROUSEL
        $(".box").removeClass("hide");
        $("#what").css("height","500px");
        $("#who").css("height","500px");
        $("#h").css("height","500px");
        $(".cf").removeClass("hide");

            //INNER CAROUSEL
            $("img").removeClass("hide");

     
        


    });

//WHEN CLICKING LOGO
	$("#logo").click(function(){  

		$(this).addClass("hide");
		$("#gears").removeClass("hide");
        $("#heart").removeClass("hide");

        //CAROUSEL            
        $(".box").addClass("hide");
        $("#what").css("height","100%");
        $("#who").css("height","210px");
        $("#h").css("height","100%");
        $(".cf").addClass("hide");

            //INNER CAROUSEL
            $("img").addClass("hide");
          

		//RE-ADD

        $(".topbox").css("right","50px");
        $(".topbox").css("border-color","rgba(133,177,221,0.8)");
        $(".topbox").css("background","url(logo.svg)");
        $(".topbox").css("background-position","center");
        $(".topbox").css("background-size","110%");

        $(".bottombox").css("right","50px");
        $(".bottombox").css("border-color","rgba(133,177,221,0.8)");

        $("#coverbox").css("right","53px");
        $("#coverbox").css("border-color","rgba(152,221,222,0.8)");

        $(".firstbox").css("border-color","rgba(133,177,221,0.8)");
        $(".header").css("color","rgba(133,177,221,0.8)");
        $(".hea").css("background-color","rgba(133,177,221,0.8)");

        $("#wi").html("What is Re(work) Water");
        $("#wa").html("Who we are");
        $("#wd").html("What we do");
        $("#hw").html("How it works");

        $(".p").removeClass("hide");
        $(".guide2").removeClass("hide");


		});

//WHEN CLICKING HEART

    $("#heart").click(function(){  

        $(this).addClass("hide");
        $("#logo").removeClass("hide");
        $("#gears").removeClass("hide");

        //CAROUSEL            
        $(".box").addClass("hide");
        $("#what").css("height","100%");
        $("#who").css("height","210px");
        $("#h").css("height","100%");
        $(".cf").addClass("hide");

        //INNER CAROUSEL
            $("img").addClass("hide");

        //RE-ADD
        
        $(".topbox").css("right","-110px");
        $(".topbox").css("border-color","rgba(163,232,177,0.8)");
        $(".topbox").css("background","url()");
        $(".topbox").css("background-position","center");
        $(".topbox").css("background-size","85%");
        
        $(".bottombox").css("right","-110px");
        $(".bottombox").css("border-color","rgba(163,232,177,0.8)");

        $("#coverbox").css("right","-107px");
        $("#coverbox").css("border-color","rgba(152,221,222,0.8)");
        
        $(".firstbox").css("border-color","rgba(163,232,177,0.8)");
        $(".header").css("color","rgba(163,232,177,0.8)");
        $(".hea").css("background-color","rgba(163,232,177,0.8)");


        // Cambiando el texto       
        $("#wi").html("Add text");
        $("#wa").html("Add text");
        $("#wd").html("Add text");
        $("#hw").html("Add text");

        //REMOVE
        //$(".p").remove();
        $(".p").addClass("hide");
        $(".guide2").addClass("hide");
    });

//INNER CAROUSEL

$(".rgt").click(function(){
        $("#i1").animate({left: "-299px"},"slow", function(){
            $(".cnt").removeClass("hide");
        });
        $("#i2").animate({left: "100px"},"slow");

    });

    $(".cnt").click(function(){
        $("#i1").animate({left: "100px"},"slow", function(){
            $(".cnt").addClass("hide");
        });
        $("#i2").animate({left: "500px"},"slow");

    });

});