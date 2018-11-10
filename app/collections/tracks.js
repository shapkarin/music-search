define(['jquery', 'underscore', 'backbone'], 

       function($, _, Backbone) {

    var Tracks = Backbone.Collection.extend({
      url: 'http://ws.audioscrobbler.com/2.0?api_key=0613f2c34cedeff7f3f81e3672f4237e&limit=32&autocorrect=1&format=json',
      parse : function(response){
        var key = response.toptracks ? 'toptracks' : 'tracks'
        return response[key].track;
      }
    });

    return Tracks;
  });
