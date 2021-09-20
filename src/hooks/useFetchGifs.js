import { useEffect } from 'react';
import { useState  } from 'react';
import   PropTypes   from 'prop-types';
import { getGifs   } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data:    [],
    loading: true
  });

  useEffect(() => {
    getGifs(category).then(imgs => setTimeout(() => setState({
      data:    imgs,
      loading: false
    }), 1000));
  }, [category]);

  return state;
};
useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired
};
