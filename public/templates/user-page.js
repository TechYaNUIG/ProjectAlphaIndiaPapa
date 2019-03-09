(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user-page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<script src=\"/javascripts/tasks.js\"></script>\r\n<script src=\"/javascripts/user-info.js\"></script>\r\n<div class=\"col-md-12 text-center\">\r\n    <a href=\"#\"><i class=\"fas fa-user-circle fa-4x\"></i></a></li>\r\n    <h2>"
    + container.escapeExpression(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <div class=\"text-center mt-auto\">\r\n        <button id=\"sign-out-button\" type=\"button\" class=\"btn btn-danger btn-rnd\">Set Color</button>\r\n    </div>\r\n    <h4><b>My Tasks</b></h4>\r\n</div>\r\n<div id=\"tasks\" class=\"col-md-12 float-left tasks-section\"></div>";
},"useData":true});
})();