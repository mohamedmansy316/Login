$("#More").click(function () {
    $("#Less").removeAttr("disabled");


    $(".notification").fadeIn("slow");
        $(".notification").css("display", "flex")

   
        if ($(".notification-hide").css("display", "none")) {
            $("#More").click(function () {
                $(".notification-hide").css("display", "flex")
            })
        }
});

$("#Less").click(function () {

    $(".notification").fadeOut("slow");
    $(".notification").css("display", "none");



    if ($(".notification-hide").css("display", "flex")) {
        $("#Less").click(function () {
            $(".notification-hide").css("display", "none")
        })

    }

    if ($(".notification-hide").css("display", "none") || $(".notification").css("display", "none")) {

        $("#Less").attr("disabled", "true");
       
    }
         

});






$(".option-show1").click(function () {

    $(".box1").fadeToggle(500);
    $(".box2 , .box3 , .box4 , .box5 , .box6 , .box7").fadeOut();

});
$(".option-show2").click(function () {

    $(".box2").fadeToggle(500);
    $(".box1 , .box3, .box4 , .box5 , .box6 , .box7").fadeOut();
   

});
$(".option-show3").click(function () {

    $(".box3").fadeToggle(500);
    $(".box2 , .box1 , .box4 , .box5 , .box6 , .box7").fadeOut();

})
$(".option-show4").click(function () {

    $(".box4").fadeToggle(500);
    $(".box2 , .box3 , .box1 , .box5 , .box6 , .box7").fadeOut();

})
$(".option-show5").click(function () {

    $(".box5").fadeToggle(500);
    $(".box2 , .box3 , .box4 , .box1 , .box6 , .box7").fadeOut();


})
$(".option-show6").click(function () {

    $(".box6").fadeToggle(500);
    $(".box2 , .box3 , .box4 , .box5 , .box1 , .box7").fadeOut();

})
$(".option-show7").click(function () {

    $(".box7").fadeToggle(500);
    $(".box2 , .box3 , .box4 , .box5 , .box6 , .box1").fadeOut();

})