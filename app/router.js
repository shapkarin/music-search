define(['jquery',
    'underscore',
    'backbone'
  ],

  function( $, _, Backbone) {

    var Workspace = Backbone.Router.extend({

      routes: {
        "search/:by/:query":  "search"
      },

      search: function(service, query) {
        console.log(service + '  ' + query);
      }
    });
    var router = new Workspace;
    Backbone.history.start();


  });