
//= require jquery

$(function showComments(){
        $("#showComment").on("click", function() {
            let store = parseInt($("#storeId").attr("data-id"))
            $.get("/comments.json ", function(data) {
                let myList = ""
                let i = 1
                data.map(function(d){
                    if (d.store_id === store){
                        let commentDate = new Date(Date.parse(d.visit_date)).toLocaleDateString()
                        let commentTime = new Date(Date.parse(d.visit_time)).toLocaleTimeString()
                        myList += "<p> "+ i + " - Comment: "+ d.case_number + " Date: " + commentDate + " Time: " + commentTime + "</p>"
                        i++
                        if (d.comment_updates.length > 0 ){
                            myList += "<a href='#' class='update-link' data-id='"+ d.id + "'>Updates</a><div id='update-"+d.id+"'></div>"
                        }
                    }
                });
                $("#openComments").html(myList);
                getUpdate()
            });
        });
    }
)

$(function() {
    $('#nextStore').on('click', function(){
        let nextStore = parseInt($("#storeId").attr("data-id")) + 1
        $.get("/stores/" + nextStore + ".json", function(data) {
            $('#storeId').text(data.store_number + " " + data.name)
            $('#storeId').attr('data-id', data.id)
            $("#openComments").html("");
        })
    })
})


function getUpdate(){
    $('.update-link').on('click', function(){
       event.preventDefault();
       let commentNumber = parseInt(this.attributes["data-id"].value)
        $.get("/comments/" +  commentNumber + ".json", function(data) {
            let commentUpdates = data['comment_updates']
            let thisUpdate = ""
            let i = 1
            commentUpdates.forEach(function(update){
                let updateDate = new Date(Date.parse(update.update_date)).toLocaleDateString()
                thisUpdate += "<p class='my-indent'>     " + i +" - " + updateDate + " Updated By: " + update.employee_name + " Update: " + update.current_update + "</p>"
                i++
            })
            $("#update-" + commentNumber).html(thisUpdate);
    })
})
}
