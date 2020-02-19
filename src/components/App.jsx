import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  // handleTitleClick = () => {
  //   // this.setState({
  //   //   currentVideo: //e.props.video from clicked video
  //   // });
  // }
  handleTitleClick(title) {
    this.setState({
      currentVideo: title
    });
  }

  // componentDidMount() {
  //   searchYouTube({key: YOUTUBE_API_KEY, query: 'React JS', max: 5}, ()=>{});
  // }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
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

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

