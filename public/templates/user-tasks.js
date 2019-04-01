(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user-tasks'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list-item\">\r\n	<label class=\"check-container\">\r\n		<div>\r\n			<h4> "
    + alias4(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"task","hash":{},"data":data}) : helper)))
    + " </h4>\r\n			<h5 class=\"task-user-name\">\r\n				Created by:&nbsp;"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "<br>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.members : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n			</h5>\r\n		</div>\r\n\r\n		<input type=\"checkbox\" id=\"check-complete\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n		<button type=\"button\" id=\"taskbutton\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-rnd btn-task-delete\">Delete Task</button>\r\n		<span class=\"checkmark\"></span>\r\n	</label>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				Group members: "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<br>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"user_name","hash":{},"data":data}) : helper)))
    + ",&nbsp;";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Completed by:&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.completed_user_name || (depth0 != null ? depth0.completed_user_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"completed_user_name","hash":{},"data":data}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.date_due : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\r\n				Due by: "
    + alias3((helpers.formatDate1 || (depth0 && depth0.formatDate1) || alias2).call(alias1,(depth0 != null ? depth0.date_due : depth0),{"name":"formatDate1","hash":{},"data":data}))
    + "<br>\r\n				<span class=\"task-due-in\">"
    + alias3((helpers.formatDate2 || (depth0 && depth0.formatDate2) || alias2).call(alias1,(depth0 != null ? depth0.date_due : depth0),{"name":"formatDate2","hash":{},"data":data}))
    + "</span>";
},"10":function(container,depth0,helpers,partials,data) {
    return "\r\n				";
},"12":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.task : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();