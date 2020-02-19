//import YOUTUBE_API_KEY from '../config/youtube.js';
// var defaultOptions = {key: YOUTUBE_API_KEY, query: 'React JS', max: 5};

// var searchYouTube = (options, callback) => {
var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }
  ).done(
    ({items}) => {
      if (callback) {
        callback(items);
      }
    }
  ).fail(
    ({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.log(err));
    }
  );
};


// const key = options.key || YOUTUBE_API_KEY;
// const query = options.query || 'React JS';
// const max = options.max || 5;

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
// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/search',
//   type: 'GET',
//   data: {
//     key: key,
//     q: query,
//     part: 'snippet',
//     maxResults: max,
//     videoEmbeddable: true,
//   },
//   success: function(data) {
//     console.log(data);
//     //  callback(data); },
//   },
//   error: function() {
//     console.log('Request Failed');
//   }
// });
// };

export default searchYouTube;
