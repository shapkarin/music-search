define(['jquery',
        'jade',
         'backbone',
  'text!app/templates/history.jade'
  ], 

  function( $, jade, Backbone, historyTp) {

    var History = Backbone.View.extend({

      events: {
        'click .remove': 'removeSearch',
        'click': 'selectSearch'
      },

      initialize: function() {

        this.options.searches.fetch();
      
        this.template = jade.compile(historyTp);
        var html = this.template({searches: this.options.searches.models});
        this.$el.html(html);

        this.options.searches.on('add',
          $.proxy(this.searchAdded, this));

        this.options.searches.on('remove',
          $.proxy(this.searchRemoved, this));
      },

      addSearch: function(search) {
        search.id = +new Date();
        this.options.searches.create(search);
      },

      selectSearch: function(ev) {
      
        this.$el.trigger('search', this._getSearch(ev).attributes);
      },

      removeSearch: function(ev) {
                var self = this; ev.stopPropagation();
                self._getSearchEl(ev).fadeOut('325',function(){
                      self._getSearch(ev).destroy();
                });

      },

      searchAdded: function(search, searches) {
        this.show(searches.models);
      },

      searchRemoved: function(search, searches) {
        this.show(searches.models);
      },

      show: function(searches) {
        this.template = jade.compile(historyTp);
        var html = this.template({searches: searches});
        this.$el.html(html);
      },

      _getSearch: function(ev) {
      
        var searchEl = this._getSearchEl(ev),
            id = searchEl.attr('data-id');

        return this.options.searches.get(id);
      },

      _getSearchEl: function(ev) {
      
        var target = $(ev.target);

              return target.closest('.search');
      }
    });

    return History;
  });
