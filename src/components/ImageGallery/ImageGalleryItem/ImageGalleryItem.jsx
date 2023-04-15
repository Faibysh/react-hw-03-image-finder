import Modal from 'components/Modal/Modal';
import React from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };
  render() {
    const { image } = this.props;
    const { isModalVisible } = this.state;
    return (
      <>
        <li className={styles['gallery-item']}>
          <div className="image-container">
            <img
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.toggleModal()}
            />
          </div>
        </li>
        {isModalVisible && (
          <Modal
            onClose={this.toggleModal}
            children={<img src={image.largeImageURL} alt={image.tags} />}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
