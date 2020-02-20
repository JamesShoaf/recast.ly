import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(options,
      (videos) => {
        this.setState(
          {
            videos: videos,
            currentVideo: videos[0]
          }
        );
      }
    );
  }

  componentDidMount() {
    this.getYouTubeVideos('horses');
  }

  handleTitleClick(title) {
    this.setState({
      currentVideo: title
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search search={this.getYouTubeVideos.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} clickHandler={this.handleTitleClick.bind(this)}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

