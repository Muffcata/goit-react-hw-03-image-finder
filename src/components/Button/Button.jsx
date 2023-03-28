import { Component } from 'react';
import style from './Button.module.css';
import propTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className={style.button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
};
