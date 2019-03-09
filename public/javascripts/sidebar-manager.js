$(document).ready(function(){
    var template = Handlebars.templates['tasks-page'];
    var templateData = template();
    $('#inner-sidebar-wrapper').html(templateData);
    
    $('#user-profile').click(function(event){

        $.ajax({
            type: "GET",
            url:"/get-user",
            success:function(data){
                var template = Handlebars.templates['user-page'];
                var templateData = template({user_name:data.user_name});
                $('#inner-sidebar-wrapper').html(templateData);
            }
        });
    });

    $('#tasks-page').click(function(event){
         template = Handlebars.templates['tasks-page'];
         var templateData = template();
    $('#inner-sidebar-wrapper').html(templateData);
    });

    
})