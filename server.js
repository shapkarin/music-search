var express = require('express'),
  modRewrite = require('connect-modrewrite'),
  app = express(),
  port = 3000,
  exclude = '!\.(js,css,svg,png,jpg,jade,woff,ttf,eot)'.replace(/,/g, '|');

app.set('port', port);

app.set('views', __dirname);

app.use(modRewrite([ exclude + ' /index.html [L]' ]));

app.use(express.static(__dirname));

app.listen(port, function(){
  console.log('Откройте страницу: http://localhost:%s', port);
});