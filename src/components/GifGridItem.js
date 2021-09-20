import React     from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
  console.log();

  return (
    <div className='card animate__animated animate__fadeIn'>
      <div>
        <img src={url} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
};
GifGridItem.propTypes = {
  title: PropTypes.string,
  url:   PropTypes.string.isRequired
};
GifGridItem.defaultProps = {
  title: ''
};