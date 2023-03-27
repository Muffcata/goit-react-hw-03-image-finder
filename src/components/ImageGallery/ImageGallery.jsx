import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { images, showLargeImage } = this.props;
    return (
      <ul className={style.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.tags}
            showLargeImage={showLargeImage}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
