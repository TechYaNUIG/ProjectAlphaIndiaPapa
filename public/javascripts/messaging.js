$(document).ready(function(){

    var numGetMessages = 0;
    userHasScrolled = false;
    var allowBottomScroll = true;
    var currTeam = localStorage.getItem("currentTeam");
    getMessages();


    $('#send-message').click(function(event){

        event.preventDefault();        
        currTeam = localStorage.getItem("currentTeam");
        var messageText = $('#message-text').val();
        if(messageText ==="")
        {
            swal({
                position: 'top-end',
                type: 'error',
                title: "Can't send an empty message!",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else
        {
            $.ajax({
                type:'POST',
                url:'/add-message/'+currTeam,
                data:{'text':messageText},
                success:function(data){
                    $('#message-text').val("");
                    getMessages();
                }
            });
            
            scrollToBottom();
            
        }
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
        if(numGetMessages <3)
                numGetMessages++;
    }

    function scrollToBottom(){
        if(!userHasScrolled && allowBottomScroll){
            $('#messages').animate({
                scrollTop:$('#messages')[0].scrollHeight - $('#messages')[0].clientHeight
            },500);
            //$('#messages').scrollTop($('#messages')[0].scrollHeight - $('#messages')[0].clientHeight);
        }
    }

     $('.message-section').scroll(function(){
         var percentScrolled = $('#messages').scrollTop()/$('#messages')[0].scrollHeight;
         if(percentScrolled<0.88 && numGetMessages>=2)
         {
            userHasScrolled = true;
         }
         else if(numGetMessages <3)
         {
             userHasScrolled == false;
         }
         else{
             userHasScrolled = false;
         }
     });

     $('.message-section').scroll(function() {
         allowBottomScroll = false;
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            allowBottomScroll = true;
        }, 2000));
    });
});