$(document).ready(function () {
    console.log("hello");

    $("#but1").mousedown(function () {
        $("div").css("background-color", "pink");

    });
    $("#but1").mouseup(function () {
        $("div").css("background-color", "yellow");
    });

    $("#but2").mousedown(function () {
        $("div").css("border-radius", "30px");

        });
        $("#but2").mouseup(function () {
            $("div").css("border-radius", "12px");

        });
        $("#but3").click(function () {
            $("body").append("<div> </div>");

        });





    });
