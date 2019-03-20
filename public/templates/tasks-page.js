(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tasks-page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src=\"/javascripts/tasks.js\"></script>\r\n<div id=\"add-task\" class=\"col-md-12\">\r\n    <textarea class=\"form-control txt-area-custom\" placeholder=\"Add a new task\" id=\"taskInput\"></textarea>\r\n    <input onfocus=\"(this.type='date')\" class=\"form-control txt-area-custom-date\" placeholder=\"Add task deadline\"\r\n        id=\"taskDeadline\">\r\n    <ul id=\"people-list\" class=\"col-md-12 people-list\">\r\n        <!--TODO placeholder values for the moment-->\r\n        <li class=\"float-right\"><button class=\"btn btn-success btn-sm btn-rnd\" id=\"postBtn\">Create</button> </li>\r\n    </ul>\r\n</div>\r\n<div id=\"tasks\" class=\"col-md-12 float-left tasks-section\">\r\n</div>";
},"useData":true});
})();