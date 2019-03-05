$(".button1").click(function(){
    $("#ball").show();
    $(".p1").text("Double click to bounce!");
});
$("#ball").dblclick(function(){
    $("#ball").attr("src","https://media.giphy.com/media/NgJwUszh4ixpu/giphy.gif");
    $(".p2").text("Now!Pass over the header! yes up there that says kyrie irving duh!");
    $("#ball").mouseenter(function(){
    $(".p1").hide();
        
    });
});
$(".header").hover(function(){
    $("body").css("background-color","yellow");
});

$(".kyrie").click(function() {
     $("#ball").hide();
     $(".p2").hide();
     $(".button1").hide();
     $(".p1").hide();
     $(".kyrie").attr("src","https://media.giphy.com/media/26xBDYZLdSw5vxiqA/giphy.gif");
     $(".p3").text("CONGRATS! YOUR DONE YEAAAAA !");
     
});
