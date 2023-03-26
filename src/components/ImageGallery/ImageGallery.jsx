import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export class ImageGallery extends Component {
  // state = {
  //   isShowModal: false,
  //   items: [],
  //   url: '',
  // };

  render() {
    const { images } = this.props;
    return (
      <ul
        classNme={style.gallery}
        // onClick={this.onShowModal}
      >
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            // largeImage={image.largeImageURL}
            alt={image.tags}
            // onShowModal={this.onShowModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
