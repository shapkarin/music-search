define(['jquery', 'underscore', 'backbone',
        'lib/backbone.localStorage'], 

       function($, _, Backbone) {

    var Searches = Backbone.Collection.extend({

      localStorage: new Backbone.LocalStorage('searches')

    });

    return Searches;
  });
