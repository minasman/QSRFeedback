//= require jquery

$(function(){
    $("#showComment").on("click", function() {
        $.get("/comments.json", function(data) {
            var myList = ""
            data.map(function(d){
                let commentDate = new Date(Date.parse(d.visit_date)).toLocaleDateString()
                let commentTime = new Date(Date.parse(d.visit_time)).toLocaleTimeString()
                myList += "<p> Comment: "+ d.case_number + " Date: " + commentDate + " Time: " + commentTime + "</p><button id='comment-"+d.id+"'>Updates</button>"
            });
            $("#openComments").html(myList);
        });
    });
});

