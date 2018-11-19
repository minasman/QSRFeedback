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

    class CommentUpdate{
        constructor(update_date, update_type, employee_name, current_update, status, comment_id) {
        this.update_date = update_date
        this.update_type = update_type
        this.employee_name = employee_name
        this.current_update = current_update
        this.status = status
        this.comment_id = comment_id
        }

        displayComment(){
            let commentDate = new Date(Date.parse(this.update_date)).toLocaleDateString()
        let newComment = "<p>Date: " + commentDate + " By: " + this.update_type + " Update: " + this.current_update + "</p>"
        $("#updates").html(newComment);
        }
    }


