(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tasks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list-item\">\r\n    <label class=\"check-container\">\r\n        <h4>\r\n            "
    + alias4(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"task","hash":{},"data":data}) : helper)))
    + "\r\n            <div class=\"task-user-name\">	\r\n                Created by: "
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "\r\n                <br>\r\n				<script type = \"text/javascript\">\r\n					var due = document.getElementById(\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "2\").innerHTML;\r\n					var year = due.substring(0,4);\r\n					var month = due.substring(5,7);\r\n					var day= due.substring(8,10);\r\n					var today = new Date();\r\n					var dd = today.getDate();\r\n					var mm = today.getMonth()+1;\r\n					var yyyy = today.getFullYear();\r\n					due2 = \"Due in: \";\r\n					if(yyyy!=year){\r\n						if(yyyy>year){due2 = \"\";due3 =\"Overdue by: \"+((year-yyyy)*(-1))+ \" years\";}\r\n						else if((year-yyyy)==1){due3 =\"1 year\";} \r\n						else{due3 =(year-yyyy)+ \" years\";} }\r\n					else if(mm!=month){\r\n						if(mm>month){due2 = \"\";due3 =\"Overdue by: \"+((month-mm)*(-1))+ \" months\";}\r\n						else if((month-mm)==1){due3 =\"1 month\";} \r\n						else{due3 =(month-mm)+ \" months\";} }\r\n					else if(dd!=day){\r\n						if(dd>day){due2 = \"\";due3 =\"Overdue by: \"+((day-dd)*(-1))+ \" days\";}\r\n						else if((day-dd)==1){due3 =\"1 day\";} \r\n						else{due3 =(day-dd)+ \" days\";} }\r\n					else{due3 = \"Due today\"; due2=\"\";}\r\n					due = \"Due by: \"+day+\"-\"+month+\"-\"+year;\r\n					document.getElementById(\""
    + ((stack1 = ((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\").innerHTML = due + \"<div class=\\\"task-due-in\\\">\"+due2+ \"<span style=\\\"color:#fc5b57\\\">\"+due3+ \"</span></div>\";\r\n				</script>\r\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "				</div>\r\n        </h4>		\r\n        <input type=\"checkbox\" id=\"check-complete\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n		<button type=\"button\" id=\"taskbutton\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-rnd btn-task-delete\">Delete Task</button>\r\n        <span class=\"checkmark\"></span>\r\n    </label>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<br>\r\n				Completed by: "
    + container.escapeExpression(((helper = (helper = helpers.completed_user_name || (depth0 != null ? depth0.completed_user_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"completed_user_name","hash":{},"data":data}) : helper)))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.date_due : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<span id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">'Due by' data not loaded</span>\r\n					<span class=\"blank\" id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "2\">"
    + ((stack1 = ((helper = (helper = helpers.date_due || (depth0 != null ? depth0.date_due : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date_due","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.task : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();