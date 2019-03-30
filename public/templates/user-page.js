(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user-page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<script src=\"/javascripts/user-tasks.js\"></script>\n<script src=\"/javascripts/user-info.js\"></script>\n<div class=\"col-md-12\">\n    <button class=\"openbtn\" onclick=\"openNav()\">&#9776;</button>\n    <div class=\"text-center\">\n        <a href=\"#\"><i class=\"fas fa-user fa-4x\" id=\"user-icon\"></i></a></li>\n        <h2>"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</h2>\n        <script type=\"text/javascript\">\n            var colorButton = document.getElementById(\"primary_color\");\n            colorButton.onchange = function () {\n                colorDiv.innerHTML = colorButton.value;\n                colorDiv.style.color = colorButton.value;\n            }\n        </script>\n        <div class=\"text-center mt-auto\">\n            <div id=\"colourchangediv\" class=\"btn btn-danger btn-rnd btn-color\">\n                <button type=\"button\" id=\"colourbutton\" class=\"btn btn-danger btn-rnd btn-selecting-c\">Set Color</button>\n                <input type=\"color\" value=\""
    + alias4(((helper = (helper = helpers.colour || (depth0 != null ? depth0.colour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colour","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" id=\"primary_color\" class=\"field-radio\">\n            </div>\n        </div>\n        <hr>\n        <h4 class=\"tasks-heading\"><b>My Tasks</b></h4>\n    </div>\n</div>\n<div id=\"tasks\" class=\"col-md-12 float-left tasks-section\"></div>";
},"useData":true});
})();