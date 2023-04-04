import React from 'react';
import styles from './Searchbar.module.css';

class SearchBar extends React.Component {
  state = {
    imageName: '',
  };

  handleSubmit = e => {
    e.preventDefault();
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
        <form className={styles['search-form']} onSubmit={this.handleSubmit}>
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
