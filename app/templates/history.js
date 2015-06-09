function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (searches) {
if ( searches.length)
{
buf.push("<h5>История поиска:</h5>");
// iterate searches
;(function(){
  var $$obj = searches;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var search = $$obj[$index];

buf.push("<div" + (jade.attr("data-id", '' + (search.get("id")) + '', true, false)) + " class=\"search\"><div class=\"query\">");
if ( search.get('service') === 'tag')
{
buf.push("<i class=\"icon-hash\"></i>");
}
else
{
buf.push("<i class=\"icon-user\"></i>");
}
buf.push((jade.escape(null == (jade_interp = search.get('query')) ? "" : jade_interp)) + "</div><span class=\"remove\"><i class=\"icon-cancel\"></i></span></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var search = $$obj[$index];

buf.push("<div" + (jade.attr("data-id", '' + (search.get("id")) + '', true, false)) + " class=\"search\"><div class=\"query\">");
if ( search.get('service') === 'tag')
{
buf.push("<i class=\"icon-hash\"></i>");
}
else
{
buf.push("<i class=\"icon-user\"></i>");
}
buf.push((jade.escape(null == (jade_interp = search.get('query')) ? "" : jade_interp)) + "</div><span class=\"remove\"><i class=\"icon-cancel\"></i></span></div>");
    }

  }
}).call(this);

}}("searches" in locals_for_with?locals_for_with.searches:typeof searches!=="undefined"?searches:undefined));;return buf.join("");
}