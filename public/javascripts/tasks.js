$(document).ready(function () {
    var currTeam = localStorage.getItem("currentTeam");
    getTasks();

    function addTaskMessage() {
        $.ajax({
            type: 'POST',
            url: '/add-message/'+currTeam,
            data: { style: "task-update", text: "New task created: " + $('#taskInput').val() },
            success: function (data) {
                $('#message-text').val("");
            }
        });
    }

    function getTasks() {
        currTeam = localStorage.getItem("currentTeam");
        $.ajax({
            url: '/getTasks/'+currTeam,
            type: 'GET',
            success: function (data) {
                var template = Handlebars.templates['tasks'];
                var templateData = template({ task: data });
                $('#tasks').html(templateData);
            }
        });
        setTimeout(getTasks, 10000);
    }

    $("#postBtn").click(function (event) {
        $.ajax({
            url: '/addTask/'+currTeam,
            type: 'POST',
            data: { task: $('#taskInput').val(), date_due: $('#taskDeadline').val() },
            success: function (data) {
                getTasks();
                addTaskMessage();
                $("#taskInput").val("")
                due_date: $('#taskDeadline').val("")
            }
        });
    });
$("#tasks").click(function (event) {
	if (event.target.name) {
		if(event.target.id=="check-complete") {
            	$.ajax({
                	url: '/completeTask/' + event.target.name,
                	type: 'PATCH',
                	success: function (result) {
					swal({
						position: 'top-end',
						type: 'success',
						title: 'Task Completed!',
						showConfirmButton: false,
						timer: 1500
					})
					getTasks();
					}
				});
		}
        if(event.target.id=="taskbutton") {
            $.ajax({
                url: '/removeTask/' + event.target.name,
                type: 'DELETE',
                success: function (result) {
				swal({
					position: 'top-end',
					type: 'success',
					title: 'Task Deleted!',
					showConfirmButton: false,
					timer: 1500
				})
                getTasks();
                },
				error: function (errMsg) {
					swal(
						'Oops...',
						errMsg.responseJSON.body,
						'error'
					)
				}
            });
		}
		if(event.target.id=="jointask") {
            $.ajax({
                url: '/joinTask/' + event.target.name,
                type: 'PATCH',
                success: function (result) {
				swal({
					position: 'top-end',
					type: 'success',
					title: 'Task Joined!',
					showConfirmButton: false,
					timer: 1500
				})
                getTasks();
                },
				error: function (errMsg) {
					swal(
						'Oops...',
						errMsg.responseJSON.body,
						'error'
					)
				}
            });
		}
    }   
});

});

