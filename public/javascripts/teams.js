$(document).ready(function () {

    getTeams();

    var userIds = new Array();
    var userNames = new Array();

    $('#teams').click(function (event) {
        console.log("clicked");
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
        userNames = [];
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
                        var template = Handlebars.templates['autocomplete'];
                        var templateData = $(template(user[0])).on('click', function () {
                            var id = {
                                user_id: $('#idVal').val()
                            };
                            var name = {
                                user_name: $('#id-picker').val()
                            };
                            userIds.push($('#idVal').val());
                            userNames.push($('#id-picker').val());
                            $('#autocomplete-list').remove();
                            $('#user-search').val('');
                            var originalHtml = $('#people-list').html();
                            var newUserHtml = "<li><a style='color:" + user[0].colour + ";'><i id='" + id.user_id + "' class='fas fa-user-circle fa-2x'></i></a></li>";
                            var newHtml = newUserHtml + originalHtml;
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

    $('#people-list').click(function (e) {
        var id = event.target.id;

        for (var i = 0; i < userIds.length; i++) {
            var x = userIds[i];
            if (x === id) {
                console.log(x);
                userIds.splice(i, 1);
                $('#' + id).closest('li').remove();
            }
        }

        var peopleList = [];
        if (id = "postBtn") {
            var total = $('#people-list li').length;
            $('#people-list li').each(function (index) {
                if (index == total - 1)
                    peopleList.push($(this).html());
            });

            if ($('#team-input').val() != "") {
                $.ajax({
                    type: "POST",
                    url: "/create-team/",
                    contentType: 'application/json',
                    data: JSON.stringify({
                        name: $('#team-input').val(),
                        members: userIds,
			membersNm: userNames
                    }),
                    success: function (data) {
                        $('#team-input').val("");
                        $('#people-list').html("<li class='float-right'>" + peopleList[0] + "</li>");
                        getTeams();
                    }
                });
            }
            userIds = [];
            userNames = [];

        }

    });

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