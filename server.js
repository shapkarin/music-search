var express = require('express'),
  modRewrite = require('connect-modrewrite'),
  app = express(),
  port = 3000,
  exclude = '!\.(js,css,svg,png,jpg,tp,woff,ttf,eot)'.replace(/,/g, '|');

app
  .set(
    'port', port
  )
  .set(
    'views', __dirname
  )

  .use(
    modRewrite(
      [ exclude + ' /index.html [L]' ]
    )
  )
  .use(
    express.static(__dirname)
  );

app.listen(port, function(){
  console.log('Откройте страницу: http://localhost:%s', port);
});