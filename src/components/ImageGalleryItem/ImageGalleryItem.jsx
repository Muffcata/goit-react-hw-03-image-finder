import { Component } from 'react';
import style from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { src, tags } = this.props;
    return (
      <li className={style.image_galleryItem}>
        <img
          className={style.image_galleryImage}
          src={src}
          alt={tags}
          // onShowModal={() => onShowModal(largeImage)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
