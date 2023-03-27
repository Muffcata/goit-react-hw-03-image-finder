import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { picture } = this.props;
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <img src={picture} alt="Something" />
        </div>
      </div>
    );
  }
}

export default Modal;
