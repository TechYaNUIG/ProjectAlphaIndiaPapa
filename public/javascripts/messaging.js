$(document).ready(function(){
    $('#send-message').click(function(event){
        var messageText = $('#message-text').val();
        $.ajax({
            type:'POST',
            url:'/add-message',
            data:{'text':messageText},
            success:function(data){
                $('#message-text').val("");
                getMessages();
            }
        });
    });

    getMessages();

    function getMessages(){
        $.ajax({
            type: "GET",
            url:"/get-messages",
            success:function(data){
                var template = Handlebars.templates['messages'];
                var templateData = template({messages:data});
                $('#messages').html(templateData);
            }
        });
        setTimeout(5000);
    }
});