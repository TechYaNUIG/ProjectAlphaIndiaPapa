(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['message-page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n            <div style=\"border-color:"
    + alias4(((helper = (helper = helpers.colour || (depth0 != null ? depth0.colour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colour","hash":{},"data":data}) : helper)))
    + ";\">\n                <p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <span>"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<button class=\"openbtn\" onclick=\"openNav()\">&#9776;</button>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1 class=\"text-center\">Chat</h1>\n    </div>\n</div>\n    <div id=\"messages\" class=\"col-md-12 message-section-mobile\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.messages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n<div class=\"message-sender-section\">\n    <form>\n        <div class=\"input-group mb-3\">\n            <input id=\"message-text\" type=\"text\" class=\"form-control input-msg-txt\" placeholder=\"Type a message...\"\n                aria-label=\"Type a message...\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <input id=\"send-message\" type=\"submit\" value=\"Send\" class=\"btn input-msg-btn\" />\n            </div>\n        </div>\n    </form>\n</div>\n\n\n</div>";
},"useData":true});
})();