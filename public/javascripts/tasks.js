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
		var due2="";
		var due3="";
                for (var i = 0; i < data.length; i++) {
		if(data[i].date_due!=null){
			due = data[i].date_due;
			var year = due.substring(0,4);
			var month = due.substring(5,7);
			var day= due.substring(8,10);
			due = "Due by: "+day+"-"+month+"-"+year;
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			due2 = "due in: ";
			if(yyyy!=year){
				if(yyyy>year){due2 = "";due3 ="Overdue by: "+((year-yyyy)*(-1))+ " years";}
				else{due3 =(year-yyyy)+ " years";} }
			else if(mm!=month){
				if(mm>month){due2 = "";due3 ="Overdue by: "+((month-mm)*(-1))+ " months";}
				else{due3 =(month-mm)+ " months";} }
			else if(dd!=day){
				if(dd>day){due2 = "";due3 ="Overdue by: "+((day-dd)*(-1))+ " days";}
				else{due3 =(day-dd)+ " days";} }
			else{due3 = "Due today"; due2="";}
		}
                    tasks+= "<li class='list-item'><label class='check-container'><h4>" + data[i].task + "<div class=\"task-user-name\">"+"Created by: "+ data[i].user_name +"<br>"+due  +"</div><div class=\"task-due-in\">"+due2+ "<span style=\"color:#fc5b57\">"+due3+ "</span></div>"+"</h4><input type='checkbox' id='check-complete' name='"+ data[i]._id +"'";
                    due="";
		    due2="";
		    due3="";
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

