$(document).ready(function () {

    getTasks();

    function addTaskMessage() {
        $.ajax({
            type: 'POST',
            url: '/add-message',
            data: { style: "task-update", text: "New task created: " + $('#taskInput').val() },
            success: function (data) {
                $('#message-text').val("");
            }
        });
    }

    function getTasks() {
        $.ajax({
            url: '/getTasks/',
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
            url: '/addTask/',
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

