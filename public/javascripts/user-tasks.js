$(document).ready(function () {
    getTasks();
    function getTasks() {
        if(currentScreen === "user-page")
        {
            $.ajax({
                url: '/get-userTasks/',
                type: 'GET',
                success: function (data) {
                        
                    Handlebars.registerHelper('formatDate2', function (dateString) {
                        var outString = "";
                    if (dateString) {
                        var today = new Date();
                        date = new Date(dateString);
                        
                        if (today.getFullYear() != date.getFullYear()) {
                            if (today.getFullYear() > (date.getFullYear()+1)) {
                                outString = "<span>"+ "Overdue by: " +(today.getFullYear() - date.getFullYear()) + " years"+"</span>";
                            }
			    else if (today.getFullYear() == (date.getFullYear()+1)) {
                                outString = "<span>"+ "Overdue by: 1 year"+"</span>";
                            }
			    else if (date.getFullYear() > (today.getFullYear()+1)) {
                                outString = "Due in: " + "<span>"+(date.getFullYear() - today.getFullYear())+ " years"+"</span>";
                            }
			    else {
				outString = "Due in: " + "<span>"+(12-(date.getMonth() - today.getMonth()))+ " months"+"</span>";
			    }
                        }
                        else if (today.getMonth() != date.getMonth()) {
                            if (today.getMonth() > (date.getMonth()+1)) {
                                outString = "<span>"+ "Overdue by: " +(today.getMonth() - date.getMonth()) + " months"+"</span>";
                            }
			    else if (today.getMonth() == (date.getMonth()+1)) {
                                outString = "<span>"+ "Overdue by: 1 month"+"</span>";
                            }

			    else if (date.getMonth() > (today.getMonth()+1)) {
                                outString = "Due in: " + "<span>"+(date.getMonth() - today.getMonth())+ " months"+"</span>";
                            }
			    else{
				if (((date.getDate() - today.getDate())<-1)) {
                                var c = -1;
				var month = date.getMonth();
				if(month==9||month==4||month==6||month==11){
					c = 30;
				}
				else if(month!=2){
					c = 31;
				}
				else{
					c = 28;
				}
				if (date.getMonth() > (today.getMonth())) {
                                	outString ="Due in: " + "<span>"+((date.getDate() - today.getDate())+c)+" days"+"</span>";
				}
				else if(date.getMonth() == (today.getMonth())){
					outString = "<span>"+"Overdue by: " + (today.getDate() - date.getDate()) + " days"+"</span>";
				}
                            }
			    }
                        }
                        else if (today.getDate() != date.getDate()) {

			    if ((today.getDate() - date.getDate()) == 1) {
                                outString = "<span>"+"Overdue by:  1 day"+"</span>";
                            }
			    else if ((today.getDate() - date.getDate()) > 1) {
                                outString = "<span>"+"Overdue by:  "+(today.getDate() - date.getDate())+" days"+"</span>";
                            }
                            else if ((date.getDate() - today.getDate()) == 1) {
                                outString = "Due in: "+"<span>"+"1 day"+"</span>";
                            }
                            else {
                                outString = "Due in: "+"<span>"+(date.getDate() - today.getDate())+" days"+"</span>";
                            }
                        }
                        else {
                            outString = "<span>"+"Due today"+"</span>";
                        }
                        }
                        return new Handlebars.SafeString(outString);
                    });
        
                    Handlebars.registerHelper('formatDate1', function (dateString) {
                        var outString = "";
                        if(dateString){
                            date = new Date(dateString);
                        var outString = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
                        }
                        return new Handlebars.SafeString(
                            outString
                        );
                    });
        
        
                    var template = Handlebars.templates['tasks'];
                    var templateData = template({ task: data });
                    $('#tasks').html(templateData);
                }
            });
            setTimeout(getTasks, 10000);
        }
        }
});

