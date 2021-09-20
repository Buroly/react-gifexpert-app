import   React          from 'react';
import   PropTypes      from 'prop-types';
import { GifGridItem  } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const {data: gifs, loading} = useFetchGifs(category);

  return (
    <>
      <h2 className='animate__animated animate__fadeIn'>{category}</h2>
      {loading && <h3 className='animate__animated animate__flash'>Cargando...</h3>}
      <div className='card-grid'>
        {
          gifs.map((img) => (
            <GifGridItem key={img.id} {...img} />
          )) 
        }
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
