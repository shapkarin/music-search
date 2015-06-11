var express = require('express'),
  modRewrite = require('connect-modrewrite'),
  app = express(),
  port = 3000,
  exclude = 'js,css,svg,jade,woff,ttf,svg,eot';

app.set('port', port);

app.set('views', __dirname);

app.use(modRewrite([ '!\.(' + exclude.replace(/,/g, '|') + ') /index.html [L]' ]));

app.use(express.static(__dirname));

app.listen(port, function(){
  console.log('Откройте страницу: http://localhost:%s', port);
});