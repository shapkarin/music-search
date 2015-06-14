define(['jquery', 'underscore', 'backbone',
        '../models/track.js'],

       function($, _, Backbone, Track) {

    var TrackList = Backbone.Collection.extend({
      model: Track
      //localStorage: new Backbone.LocalStorage('searches')

    });

    return TrackList;
  });
