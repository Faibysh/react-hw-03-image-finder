import React from 'react';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    imageName: '',
  };

  onFormSubmit = async imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </>
    );
  }
}

export default App;
