import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { src, tags, largeImageURL, showLargeImage } = this.props;
    return (
      <li className={style.image_galleryItem}>
        <img
          className={style.image_galleryImage}
          src={src}
          alt={tags}
          onClick={() => showLargeImage(largeImageURL)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: propTypes.string,
  largeImageURL: propTypes.string,
  showLargeImage: propTypes.func,
};
