$(document).ready(function(){

    userHasScrolled = false;
    var currTeam = localStorage.getItem("currentTeam");
    getMessages();    

    $('#send-message').click(function(event){
        var messageText = $('#message-text').val();
        $.ajax({
            type:'POST',
            url:'/add-message/'+currTeam,
            data:{'text':messageText},
            success:function(data){
                $('#message-text').val("");
                getMessages();
            }
        });
    });

    function getMessages(){
        currTeam = localStorage.getItem("currentTeam");
        $.ajax({
            type: "GET",
            url:"/get-messages/"+ currTeam,
            success:function(data){
                var template = Handlebars.templates['messages'];
                var templateData = template({messages:data});
                $('#messages').html(templateData);
            }
        });
        setTimeout(getMessages, 2000);
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