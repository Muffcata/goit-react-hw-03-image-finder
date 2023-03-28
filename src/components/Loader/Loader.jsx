import { Blocks } from 'react-loader-spinner';
import style from './Loader.module.css';
import React from 'react';

export const Loader = () => {
  return (
    <div className={style.loader_wrapper}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        className={style.loader}
      />
    </div>
  );
};
export default Loader;
