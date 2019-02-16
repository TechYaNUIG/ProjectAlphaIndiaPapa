$(document).ready(function(){
    
    getTasks();
    
    
    function getTasks() {
        $.ajax({
            url: '/getTasks/',
            type: 'GET',
            success: function (data) {
                var tasks = "<ul class='tasks-list'>";
                for (var i = 0; i < data.length; i++) {
                    tasks+= "<li class='list-item'><label class='check-container'><h4>" + data[i].task + "</h4><input type='checkbox'><span class='checkmark'></span></label></li>";
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
            data: {task:$('#taskInput').val()},
            success: function (data) {
                getTasks();
                $("#taskInput").val("")
            }
        });
    });
    
});

