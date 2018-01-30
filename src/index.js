import React from 'react';
import ReactDOM from 'react-dom';
// Create a new componet

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRZTqtcSlbTnuLvEOcaZ2XthsAgL2msaQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
