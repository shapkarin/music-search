function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (results) {
buf.push("<!--todo: preload images & auto_prefix delay--><div class=\"row byTag\">");
// iterate results
;(function(){
  var $$obj = results;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var track = $$obj[i];

var delay = i*50+'ms'
buf.push("<div class=\"col-md-3 col-sm-4\"><div" + (jade.attr("style", 'animation-delay: ' + (delay) + ';' +
      '-webkit-animation-delay: ' + (delay) + ';' +
      '-moz-animation-delay: ' + (delay) + ';', true, false)) + " class=\"search_result clearfix\"><div class=\"album-cover\"><span class=\"rank\">" + (jade.escape(null == (jade_interp = track.get('@attr')['rank']) ? "" : jade_interp)) + "</span>");
var mp3 = track.get('downloadurl')
if ( mp3)
{
buf.push("<audio controls=\"controls\" preload=\"none\" class=\"audio\"><source" + (jade.attr("src", '' + (mp3) + '', true, false)) + " type=\"audio/mpeg\"/><a" + (jade.attr("href", '' + (mp3) + '', true, false)) + ">Скачать</a></audio>");
}
if ( track.get('image'))
{
buf.push("<img" + (jade.attr("src", '' + (track.get("image")[3]["#text"]) + '', true, false)) + "/>");
}
else
{
buf.push("<img src=\"stylesheets/img/no-img.png\"/>");
}
buf.push("</div><div class=\"info\"><a" + (jade.attr("href", '' + (track.get("url")) + '', true, false)) + ">" + (jade.escape(null == (jade_interp = track.get('artist')['name']) ? "" : jade_interp)) + ":<br/>" + (jade.escape(null == (jade_interp = track.get('name')) ? "" : jade_interp)) + "</a></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var track = $$obj[i];

var delay = i*50+'ms'
buf.push("<div class=\"col-md-3 col-sm-4\"><div" + (jade.attr("style", 'animation-delay: ' + (delay) + ';' +
      '-webkit-animation-delay: ' + (delay) + ';' +
      '-moz-animation-delay: ' + (delay) + ';', true, false)) + " class=\"search_result clearfix\"><div class=\"album-cover\"><span class=\"rank\">" + (jade.escape(null == (jade_interp = track.get('@attr')['rank']) ? "" : jade_interp)) + "</span>");
var mp3 = track.get('downloadurl')
if ( mp3)
{
buf.push("<audio controls=\"controls\" preload=\"none\" class=\"audio\"><source" + (jade.attr("src", '' + (mp3) + '', true, false)) + " type=\"audio/mpeg\"/><a" + (jade.attr("href", '' + (mp3) + '', true, false)) + ">Скачать</a></audio>");
}
if ( track.get('image'))
{
buf.push("<img" + (jade.attr("src", '' + (track.get("image")[3]["#text"]) + '', true, false)) + "/>");
}
else
{
buf.push("<img src=\"stylesheets/img/no-img.png\"/>");
}
buf.push("</div><div class=\"info\"><a" + (jade.attr("href", '' + (track.get("url")) + '', true, false)) + ">" + (jade.escape(null == (jade_interp = track.get('artist')['name']) ? "" : jade_interp)) + ":<br/>" + (jade.escape(null == (jade_interp = track.get('name')) ? "" : jade_interp)) + "</a></div></div></div>");
    }

  }
}).call(this);

buf.push("</div>");}("results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined));;return buf.join("");
}