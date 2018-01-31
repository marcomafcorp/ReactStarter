import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Create a new componet

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRZTqtcSlbTnuLvEOcaZ2XthsAgL2msaQ';

YTSearch({key: API_KEY, term: 'React JS'}, function(data) {
  console.log(data);
});


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
