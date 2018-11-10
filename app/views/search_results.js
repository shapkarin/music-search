define(['jquery',
        'underscore',
        'backbone',
        'app/collections/tracks'
  ],

  function( $, _, Backbone, Tracks) {

    var SearchResults = Backbone.View.extend({

      initialize: function() {
        _.bindAll(this);
        this.collection.fetch({
          data: {
            method: 'artist.gettoptracks',
            artist: 'Khruangbin'
          }
        });
        this.collection.on('reset', this.render);
      },

      //el: $('#search_results'),
      collection: new Tracks(),

      events: {
        'click .search_result': 'more'
      },

      more: function(ev) {

      },

      render: function() {
        console.log(this.collection);
        this.$el.html(_.template(this.options.template, {
          results: this.collection.toJSON()
        }))
      },

      errorLoadingResults: function(model, xhr, options) {
        console.log('Error loading searches.');
      }
    });

    return SearchResults;
  });