$(document).ready(function(){

    var currentTeamId = "";
    if(localStorage.getItem("currentTeam") === null)
    {
        localStorage.setItem("currentTeam", "");
    }

    if(localStorage.getItem("currentTeam") != "")
    {
        currentTeamId = localStorage.getItem("currentTeam");
    }
    var template = Handlebars.templates['tasks-page'];
    var templateData = template();
    $('#inner-sidebar-wrapper').html(templateData);
    
    $('#user-profile').click(function(event){

        $.ajax({
            type: "GET",
            url:"/get-user",
            success:function(data){
                var template = Handlebars.templates['user-page'];
                var templateData = template({user_name:data.user_name, colour:data.colour, _id:data._id});
                $('#inner-sidebar-wrapper').html(templateData);
            }
        });
    });

    $('#teams-page').click(function(event){
        template = Handlebars.templates['teams-page'];
        var templateData = template();
        $('#inner-sidebar-wrapper').html(templateData);
    });

    $('#tasks-page').click(function(event){
         template = Handlebars.templates['tasks-page'];
         var templateData = template();
    $('#inner-sidebar-wrapper').html(templateData);
    });

    
})