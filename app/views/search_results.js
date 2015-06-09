define(['jquery',
        'underscore',
        'backbone'
  ],

  function( $, _, Backbone) {

    var SearchResults = Backbone.View.extend({

      events: {
        'click .search_result': 'more'
      },

      search: function(search) {
        this.options.model.search(
          search,
          $.proxy(this.resultsLoaded, this),
          $.proxy(this.errorLoadingResults, this)
        );
      },

      more: function(ev) {

      },

      resultsLoaded: function(results) {
        this.$el.html(_.template(this.options.template, {
          results: results
        }))
      },

      errorLoadingResults: function(model, xhr, options) {

        console.log('Error loading searches.');
      }
    });

    return SearchResults;
  });