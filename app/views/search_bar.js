define(['jquery',
        'underscore',
        'backbone',
        'text!app/templates/search_bar.tp'
  ],

  function( $, _, Backbone, searchBarTp) {

    var SearchBar = Backbone.View.extend({

      events: {
        'submit .search_form': 'search'
      },

      initialize: function() {

        this.$el.html(_.template(searchBarTp, {}));
      },

      search: function(ev) {
        ev.preventDefault();
        var artistChecked = $('#artist').attr('checked'),
            query = $('#query').val(),
            service = artistChecked ? 'artist' : 'tag';

        if(query){

          this.$el.trigger('search', {
            query: query,
            service: service
          });

          } else {
            //console.log('Invalid service');
          }

      }

    });

    return SearchBar;
  });
