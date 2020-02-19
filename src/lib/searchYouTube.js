import YOUTUBE_API_KEY from '../config/youtube.js';
var defaultOptions = {key: YOUTUBE_API_KEY, query: 'React JS', max: 5};

var searchYouTube = (options = defaultOptions, callback) => {
  // TODO

  const {key, query, max} = options;

  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: options,
  //   success: callback,
  //   datatype: 'JSON'
  //   // error: function() {
  //   //   console.error('Failed to get videos');
  //   // }
  // });

  //   $.get('https://www.googleapis.com/youtube/v3/search',
  //     {
  //       part: 'kind,etag,id,snippet',
  //       maxResults: max,
  //       key: key,
  //       q: query
  //     },
  //     callback);
  // };
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: key,
      q: query,
      part: 'kind,etag,id,snippet',
      maxResults: max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) { callback(data); },
    datatype: 'application/json'
    // error: function() {
    //   console.log('Request Failed');
    // }
  });
};

export default searchYouTube;
