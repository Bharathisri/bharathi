$(document).ready(function(){
    $("input:button").click(function()
        {
            $("ol").append("<li>"+$("input:text").val()+"</li>");
        });
});

