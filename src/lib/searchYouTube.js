import API_KEY from '../config/youtube.js';

var defaultOptions = {key: API_KEY, query: 'React JS', max: 5};

var searchYouTube = (options = defaultOptions, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: callback,
    error: function() {
      console.error('Failed to get videos');
    }
  });
};

export default searchYouTube;
