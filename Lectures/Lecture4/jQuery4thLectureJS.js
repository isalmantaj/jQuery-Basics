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
    
/* 
    Class 4
    ==================================================================
*/
    $("#btn9").click(function(){
        // $("#content").text("<b>This is my new text</b>");
        $("#content").html("<b>This is my new text</b>");
    });

    $("#btn10").click(function(){
        $(".image").attr("src","https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    });
});