define(['jquery',
        'jade',
        'backbone',
        'text!app/templates/search_bar.jade'
  ],

  function( $, jade, Backbone, searchBarTp) {

    var SearchBar = Backbone.View.extend({

      events: {
        'submit .search_form': 'search'
      },

      initialize: function() {

        this.$el.html(
            jade.compile(searchBarTp)
        );
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
