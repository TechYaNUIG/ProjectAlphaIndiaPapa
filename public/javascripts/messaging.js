userHasScrolled = false;
var currTeam = localStorage.getItem("currentTeam");

function getMessages() {
    currTeam = localStorage.getItem("currentTeam");
    $.ajax({
        type: "GET",
        url: "/get-messages/" + currTeam,
        success: function (data) {
            var template = Handlebars.templates['messages'];
            var templateData = template({ messages: data });
            $('#messages').html(templateData);
        }
    });
    scrollToBottom();
    setTimeout(getMessages, 2000);
}

function scrollToBottom() {
    console.log(userHasScrolled);
    if (!userHasScrolled) {
        $('.message-section').scrollTop($('.message-section')[0].scrollHeight);
        $(".message-section").animate({
            scrollTop: $(".message-section")[0].scrollHeight- $('#messages')[0].clientHeight
        }, "slow");
    }
}

$(document).ready(function () {

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


    var lastScrollTop = 0;

    $('.message-section').scroll(function () {
        var st = $(this).scrollTop();
        if (!(st > lastScrollTop)){
            userHasScrolled = true;
        } else if(st = $(".message-section")[0].scrollHeight){
            userHasScrolled = false;
        }
        lastScrollTop = st;
    });

});