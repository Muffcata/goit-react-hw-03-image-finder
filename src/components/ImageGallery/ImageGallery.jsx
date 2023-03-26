import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export class ImageGallery extends Component {
  // state = {
  //   isShowModal: false,
  //   items: [],
  //   url: '',
  // };

  // onShowModal = url => {
  //   this.setState({ isShowModal: true, largeImageURL: url });
  // };

  render() {
    const { images } = this.props;
    return (
      <ul classNme={style.gallery} onClick={this.onShowModal}>
        {images.map(
          { id, webformatURL, largeImageURL, tags, onShowModal }(
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              largeImage={largeImageURL}
              alt={tags}
              onShowModal={this.onShowModal}
            />
          )
        )}
      </ul>
    );
  }
}

export default ImageGallery;
