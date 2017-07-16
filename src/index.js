import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBCRQqTfB6LwEUPd_Ak6oAb4n-6F_Nv9uc';

//create a new component. This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }
  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

//Take this component generated Html and render it on the page

ReactDOM.render(
  <App/>, document.querySelector('.container'));
