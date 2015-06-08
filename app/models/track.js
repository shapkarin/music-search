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
						var results = response.toptracks || [],
						    instances = [];
           // console.log(JSON.stringify(response, undefined, 4) );
            if(results && results.track.length) {
              for(var i=0;i<results.track.length;i++) {
                var r = results.track[i];
                //todo: do this in template
                instances.push( new Track(r) );
              }
           }
						success(instances);
            //console.log(JSON.stringify(instances, undefined, 4))
					},
					error: function() {
						error(arguments);
					}
				});
			},
      
      moreInfo: function(params, success, error) {

      }
		});

		return Track;
	});
