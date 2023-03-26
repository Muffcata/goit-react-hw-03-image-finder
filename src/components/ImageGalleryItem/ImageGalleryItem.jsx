import { Component } from 'react';
import style from '.ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformURL, tags, largeImg } = this.props;
    return (
      <li className={style.image_gallery - item}>
        <img
          className={style.image_gallery - image}
          src={webformURL}
          alt={tags}
          onShowModal={() => onShowModal(largeImg)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
