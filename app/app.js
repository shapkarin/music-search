define(['jquery',
        'underscore',
         'backbone',

  'app/collections/search_list',
  'app/models/track',

  'app/views/search_bar',
  'app/views/history',
  'app/views/search_results',
  
  'text!app/templates/layout.tp',
  'text!app/templates/search_results/artist.tp',
  'text!app/templates/search_results/tag.tp'
  ],

  function( $, _, Backbone,

      SearchList,
      Artist,

      SearchBar,
      History,
      SearchResults,

      layoutTp,
      artistTp,
      tagTp
  ) {

      var App = Backbone.View.extend({

        events: {
          'search .search_bar': 'newSearch',
          'search .history': 'historySearch'
        },

        initialize: function() {
        
          this.$el.html(_.template(layoutTp, {}));

          this.searchBar = new SearchBar({
            el: this.$el.find('.search_bar')
          });

          this.history = new History({
            el: this.$el.find('.history'),
            searches: new SearchList()
          });

          this.artistSearchResults = new SearchResults({
            el: $('#search_results'),
                  model: new Artist,
                  template: artistTp  
          });

          this.tagSearchResults = new SearchResults({
            el: $('#search_results'),
                  model: new Artist,
                  template: tagTp
          });
        },

        newSearch: function(ev, search) {
        
          this.history.addSearch(search);  

          this.performSearch(search);
        },

        historySearch: function(ev, search) {
        
          this.performSearch(search);
        },

        performSearch: function(search) {

          var service = search && search.service,
              viewId = service + 'SearchResults',
              view = this[viewId];
            
          if(view) {
            view.search(search);
          }
        }

      });

      return App;
  });
