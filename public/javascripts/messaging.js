$(document).ready(function () {

    userHasScrolled = false;
    var currTeam = localStorage.getItem("currentTeam");
    getMessages();

    $('#send-message').click(function (event) {
        event.preventDefault();
        currTeam = localStorage.getItem("currentTeam");
        var messageText = $('#message-text').val();
        $.ajax({
            type: 'POST',
            url: '/add-message/' + currTeam,
            data: { 'text': messageText },
            success: function (data) {
                $('#message-text').val("");
                getMessages();
            }
        });
        scrollToBottom();
    });

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
        if (!userHasScrolled) {
            $('.message-section').scrollTop($('.message-section')[0].scrollHeight);
            $(".message-section").animate({
                scrollTop: $(".message-section")[0].scrollHeight
            }, "slow");
        }
    }

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