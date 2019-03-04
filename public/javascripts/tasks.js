$(document).ready(function () {

    getTasks();

    function addTaskMessage() {
        $.ajax({
            type:'POST',
            url:'/add-message',
            data:{style:"task-update",text:"New task created: "+$('#taskInput').val()},
            success:function(data){
                $('#message-text').val("");
            }
        });
    }

    function getTasks() {
        $.ajax({
            url: '/getTasks/',
            type: 'GET',
            success: function (data) {
                var tasks = "<ul class='tasks-list'>";
		var due = "";
                for (var i = 0; i < data.length; i++) {
		if(data[i].date_due!=null){due = "Due by: "+data[i].date_due;}
                    tasks+= "<li class='list-item'><label class='check-container'><h4>" + data[i].task + "<div class=\"task-user-name\">"+"Created by: "+ data[i].user_name +"<br><br>"+due  + "</div>"+"</h4><input type='checkbox' id='check-complete' name='"+ data[i]._id +"'";
                    due="";
		    if(data[i].commpleted){
                        tasks += "checked";
                    }
                    tasks += "><span class='checkmark'></span></label></li>";
                }
                tasks += "</ul>"
                $("#tasks").html(tasks);
            }
        });
        setTimeout(getTasks, 10000);
    }

    $("#postBtn").click(function (event) {
        $.ajax({
            url: '/addTask/',
            type: 'POST',
            data: { task: $('#taskInput').val(), date_due:$('#taskDeadline').val() },
            success: function (data) {
                getTasks();
                addTaskMessage();
                $("#taskInput").val("")
		due_date:$('#taskDeadline').val("")
            }
        });
    });

    $("#tasks").on('click', '#check-complete', function () {
        if (event.target.name) {
            $.ajax({
                url: '/completeTask/' + event.target.name,
                type: 'PATCH',
                success: function (result) {
                    getTasks();
                }
            });
        }
    });

});

