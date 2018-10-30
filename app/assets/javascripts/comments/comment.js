$(function(){
    var commentId = parseInt($(".myComment").attr("data-id"));
    $(".comment-updates").on("click", function() {
        $.get("/comments/" + commentId + "/comment_updates.json", function(data) {
            var myUpdates = ""
            const theUpdates = data['comment_updates']
            theUpdates.map(function(d){
                let commentDate = new Date(Date.parse(d.update_date)).toLocaleDateString()
                myUpdates += "<p>Date: " + commentDate + " Contacted By: " + d.employee_name + " Update: " + d.current_update + "</p>"
            });
            $("#updates").html(myUpdates);
        });
    });
});