(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user-page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<script src=\"/javascripts/tasks.js\"></script>\r\n<script src=\"/javascripts/user-info.js\"></script>\r\n<div class=\"col-md-12 text-center\">\r\n    <a href=\"#\"><i class=\"fas fa-user-circle fa-4x\"></i></a></li>\r\n    <h2>"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<script type = \"text/javascript\">\r\n	var colorButton = document.getElementById(\"primary_color\");\r\n    colorButton.onchange = function() {\r\n        colorDiv.innerHTML = colorButton.value;\r\n        colorDiv.style.color = colorButton.value;\r\n    }\r\n	</script>\r\n    <div class=\"text-center mt-auto\">\r\n	<div id=\"colourchangediv\" class=\"btn btn-danger btn-rnd btn-color\">\r\n        <button type=\"button\" id=\"colourbutton\" class=\"btn btn-danger btn-rnd btn-selecting-c\">Set Color</button>\r\n		<input type=\"color\" value=\""
    + alias4(((helper = (helper = helpers.colour || (depth0 != null ? depth0.colour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colour","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" id=\"primary_color\" class=\"field-radio\">\r\n		</div>\r\n    </div>\r\n    <h4><b>My Tasks</b></h4>\r\n</div>\r\n<div id=\"tasks\" class=\"col-md-12 float-left tasks-section\"></div>";
},"useData":true});
})();