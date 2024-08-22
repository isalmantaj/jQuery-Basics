$(document).ready(function(){

/* 
    Show/Hide Functions
    ==================================================================
*/

    $("#btn1").click(function(){
        // $("#container").hide();
        $("#container").fadeOut(2000, function(){
            alert("Container is Gone!!!");
        });
    });

    $("#btn2").click(function(){
        // $("#container").show();
        $("#container").fadeIn();
    });

    $("#btn3").click(function(){
        $("#container").fadeToggle();
    });

    $("#btn4").click(function(){
        $("#container").fadeTo(250, 0.2, function(){
            alert("Container is Faded!!!");
        });
    });

/* 
    Slide Functions
    ==================================================================
*/

    $("#btn5").click(function(){
        $("#container").slideUp(3000, function(){
            alert("Container Up!!!");
        });
    });
    
    $("#btn6").click(function(){
        $("#container").slideDown();
    });
    
    $("#btn7").click(function(){
        $("#container").slideToggle();
    });
   
    $("#btn8").click(function(){
        $("#container").animate({
            width: '400px',
            height: '400px'
        },300);
    });
    
});