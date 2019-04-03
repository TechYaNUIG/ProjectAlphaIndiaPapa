userHasScrolled = false;
var currTeam = localStorage.getItem("currentTeam");
var mobileMessages = false;

function scrollToBottom(section, sectionId) {
    
        $(section).scrollTop($(section)[0].scrollHeight);
        $(section).animate({
            scrollTop: $(section)[0].scrollHeight - $(sectionId)[0].clientHeight
        }, "slow");
    
}

function getMessages(goToBottom) {
    currTeam = localStorage.getItem("currentTeam");
    $.ajax({
        type: "GET",
        url: "/get-messages/" + currTeam,
        success: function (data) {
            if(!mobileMessages){
                var template = Handlebars.templates['messages'];
                var templateData = template({ messages: data });
                $('#messages').html(templateData);
            }else{
                var template = Handlebars.templates['message-page'];
                var templateData = template({ messages: data });
                $('#inner-sidebar-wrapper').html(templateData);
            }   

            if(goToBottom){
                scrollToBottom('.message-section', '#messages');
                
            }
        }
    });
   
    setTimeout(getMessages, 2000);
}



$(document).ready(function () {

    getMessages(true);

    $('#message-page').click(function (event) {
        mobileMessages = true;
        getMessages();
        userHasScrolled = true; // Temp stop scrolling
        $('#inner-sidebar-wrapper').css("background", "#fff");
        scrollToBottom('.message-section', '#messages');
    });

    $('#send-message').click(function (event) {

        event.preventDefault();
        currTeam = localStorage.getItem("currentTeam");
        var messageText = $('#message-text').val();
        if (messageText === "") {
            swal({
                position: 'top-end',
                type: 'error',
                title: "Can't send an empty message!",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/add-message/' + currTeam,
                data: { 'text': messageText },
                success: function (data) {
                    $('#message-text').val("");
                    getMessages(true);
                    
                }
            });

            

        }
    });


    var lastScrollTop = 0;

    $('.message-section').scroll(function () {
        var st = $(this).scrollTop();
        if (!(st > lastScrollTop)) {
            userHasScrolled = true;
        } else if (st = $(".message-section")[0].scrollHeight) {
            userHasScrolled = false;
        }
        lastScrollTop = st;
    });


    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
});