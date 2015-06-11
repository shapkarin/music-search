var express = require('express'),
  modRewrite = require('connect-modrewrite'),
  app = express(),
  port = 3000;

app.set('port', port);

app.set('views', __dirname);

app.use(modRewrite([ '!\.(js|css|svg) /index.html [L]' ]));

app.use(express.static(__dirname + '/output'));

app.listen(port, function(){
  console.log('Откройте страницу: http://localhost:%s', port);
});