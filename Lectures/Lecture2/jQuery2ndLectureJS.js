/* 
Show/Hide Functions
==================================================================
*/
$(document).ready(function(){

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

});