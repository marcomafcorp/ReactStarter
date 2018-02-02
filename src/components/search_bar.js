import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return(
    <div className="search-bar">
      <input
      value = {this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />
      <span className="font-page">   Blazing Fast Search</span>
    </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
