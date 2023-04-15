import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import React from 'react';
import { PER_PAGE, getImages } from 'services/api/api';
import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    page: 1,
    images: [],
    error: null,
    status: 'idle',
    isButtonVisible: false,
  };

  fetchImages = async () => {
    this.setState({ status: 'pending' });
    try {
      const response = await getImages(this.props.imageName, this.state.page);
      this.setState({
        images: [...response.hits],
        status: 'resolved',
        isButtonVisible:
          response.hits.length &&
          response.totalHits >= PER_PAGE * this.state.page,
      });
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  loadMore = async () => {
    await this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    try {
      const response = await getImages(this.props.imageName, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        status: 'resolved',
        isButtonVisible:
          response.hits.length &&
          response.totalHits >= PER_PAGE * this.state.page,
      }));
      this.setState({});
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  async componentDidUpdate(prevProps) {
    const prevName = prevProps.imageName;
    const newName = this.props.imageName;
    if (prevName === newName) return;

    this.fetchImages();
  }

  render() {
    const { images, status, error, isButtonVisible } = this.state;
    return (
      <>
        {status === 'rejected' && <div>{error}</div>}
        {status === 'pending' && <Loader />}
        {
          <>
            <ul className={styles.gallery}>
              {images.length ? (
                images.map(image => (
                  <ImageGalleryItem key={image.id} image={image} />
                ))
              ) : (
                <div>You don't have any photos</div>
              )}
            </ul>
            {isButtonVisible && <Button onLoadMore={this.loadMore} />}
          </>
        }
      </>
    );
  }
}

export default ImageGallery;
