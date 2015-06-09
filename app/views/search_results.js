define(['jquery',
    'jade',
    'backbone'
  ],

  function( $, jade, Backbone) {

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
        //console.log(results);
        this.template = jade.compile(this.options.template);
        var html = this.template({results: results});
        this.$el.html(html);
      },

      errorLoadingResults: function(model, xhr, options) {

        console.log('Error loading searches.');
      }
    });

    return SearchResults;
  });