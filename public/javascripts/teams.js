$(document).ready(function () {

    getTeams();

    var userIds = new Array();

    $('#teams').click(function (event) {
        if (event.target.name) {
            localStorage.setItem("currentTeam", event.target.name);
            console.log(localStorage.getItem("currentTeam"));
            getMessages();
        }
    });

    $('#postBtn').click(function (event) {
        $.ajax({
            type: "POST",
            url: "/create-team/",
            contentType: 'application/json',
            data: JSON.stringify({
                name: $('#team-input').val(),
                members: userIds
            }),
            success: function (data) {
                $('#team-input').val("");
                getTeams();
            }
        });
        userIds = [];
    });

    $('#user-search').keyup(function (e) {
        if ($('#user-search').val() < 1) {
            $('#autocomplete-list').remove();
        } else {
            var searchString = $('#user-search').val();

            if (searchString.length > 2) {
                $.ajax({
                    type: "GET",
                    url: "/search-users/" + searchString,
                    success: function (user) {
                        console.log(user);
                        var template = Handlebars.templates['autocomplete'];
                        var templateData = $(template(user)).on('click',function(){
                            var id = {
                                user_id: $('#idVal').val()
                            };
                            userIds.push(id);
                            console.log(userIds);
                            $('#autocomplete-list').remove();
                            $('#user-search').val('');
                            var originalHtml = $('#people-list').html();
                             var newUserHtml = "<li><a style='color:"+user.colour+";'><i class='fas fa-user-circle fa-2x'></i></a></li>";
                             var newHtml = newUserHtml+originalHtml;
                            $('#people-list').html(newHtml);
                        });
                        if ($('#autocomplete-list').length > 0) {
                            $('#autocomplete-list').replaceWith(templateData);
                        } else {
                            $(templateData).insertAfter($('#user-search'));
                        }
                    }
                });
            }


        }

    });

    function autocompleteHandler(user)
    {
        
    }

    function getTeams() {
        $.ajax({
            type: "GET",
            url: "/get-teams",
            success: function (response) {
                var template = Handlebars.templates['teams'];
                var templateData = template({
                    teams: response
                });
                $('#teams').html(templateData);
            }
        });
        setTimeout(getTeams, 20000);
    }


});