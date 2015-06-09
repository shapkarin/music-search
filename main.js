requirejs.config({
  baseUrl: '/',
  paths: {
    text: 'lib/require/plugins/text',
    jquery: 'lib/jquery-1.8.3',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone'
  }

});

requirejs(['jquery', 
     'underscore',
     'backbone',
     'app/app'], function($, _, Backbone, App) {

    new App({
      el: $('#application')
    });

});
