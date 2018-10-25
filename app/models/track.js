define(['jquery',
        'underscore',
         'backbone'
  ],

  function( $, _, Backbone) {

    var Track = Backbone.Model.extend({

      search: function(params, success, error) {

        var name =  encodeURIComponent(params.query);
        this.fetch({
          url: 'http://ws.audioscrobbler.com/2.0/?method=' + params.service +'.gettoptracks&' + params.service + '=' +  name + '&api_key=0613f2c34cedeff7f3f81e3672f4237e&limit=32&autocorrect=1&format=json',
          type: 'get',
          dataType: 'jsonp',
          success: function(model, response) {
            var results = response.toptracks || response.tracks || [],
                track = results.track,
                instances = [];
            if(results && track.length) {
              for(var i=0;i<track.length;i++) {
                var r = results.track[i];
                // better is use backbone collection
                instances.push( new Track(r) );
              }
           }
            success(instances);
          },
          error: function() {
            error(arguments);
          }
        });
      }
    });

    return Track;
  });
