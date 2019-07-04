import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.apiSecret = process.env.REACT_APP_API_SECRET;
  }

  onSearchSubmit = async term => {
    //console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${this.apiSecret}`
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
