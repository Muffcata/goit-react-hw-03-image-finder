import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape') {
      return this.props.closeLargeImage();
    }
  };
  render() {
    const { picture } = this.props;
    return (
      <div className={style.overlay} onClick={this.props.closeLargeImage}>
        <div className={style.modal}>
          <img src={picture} alt="Something" />
        </div>
      </div>
    );
  }
}

export default Modal;
