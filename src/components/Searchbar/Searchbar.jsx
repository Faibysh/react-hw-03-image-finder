import React from 'react';

class SearchBar extends React.Component {
  state = {
    imageName: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.imageName.trim());
    if (this.state.imageName.trim().length) {
      this.props.onSubmit(this.state.imageName.trim());
      this.setState({ imageName: '' });
    }
  };
  onChangeImageName = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.imageName}
            onChange={e => this.onChangeImageName(e.target.value)}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
