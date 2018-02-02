import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCRZTqtcSlbTnuLvEOcaZ2XthsAgL2msaQ';
YTSearch({key: API_KEY, term: 'React JS'}, function(data) {
  console.log(data);
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  this.videoSearch('React JS');
}
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      selectedVideo: videos[0]
    });
  });
  }

render() {
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
          <div></div>
          <div>
          

          </div>
          <span><img className="img-size" src="../img/IMG_1311.JPG" alt="Image"/></span>

      </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
