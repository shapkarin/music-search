function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<form role=\"search\" class=\"navbar-form navbar-left search_form\"><div class=\"form-group\"><div class=\"input-group\"><input id=\"query\" type=\"text\" name=\"query\" value=\"\" placeholder=\"Артист или стиль\" class=\"form-control\"/><div class=\"input-group-btn\"><button style=\"display:block;\" class=\"search btn btn-default\">Поиск<i class=\"icon-search\"></i></button></div></div><div class=\"radio\"><label for=\"artist\" class=\"radio-inline\"><input id=\"artist\" type=\"radio\" name=\"service\" value=\"artist\" checked=\"\"/><i class=\"icon-user\"></i> Артист</label></div><div class=\"radio\"><label for=\"tag\"><input id=\"tag\" type=\"radio\" name=\"service\" value=\"tag\"/><i class=\"icon-hash\"></i> Тег</label></div></div></form>");;return buf.join("");
}