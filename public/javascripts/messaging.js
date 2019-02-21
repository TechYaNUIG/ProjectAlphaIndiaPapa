$(document).ready(function(){

    userHasScrolled = false;

    getMessages();    

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

    function getMessages(){
        $.ajax({
            type: "GET",
            url:"/get-messages",
            success:function(data){
                var template = Handlebars.templates['messages'];
                var templateData = template({messages:data});
                console.log(templateData);
                $('#messages').html(templateData);
            }
        });
        setTimeout(getMessages, 5000);
        scrollToBottom();
    }

    function scrollToBottom(){
        if(!userHasScrolled){
            $('.message-section').scrollTop($('.message-section')[0].scrollHeight);
        }
    }

     $('.message-section').scroll(function(){
        userHasScrolled = true;
     });
});