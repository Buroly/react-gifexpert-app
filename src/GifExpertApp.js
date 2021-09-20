import React, { useState } from 'react';
import { AddItem } from './components/AddItem';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Rick and Morty']);
  const placeholder = {
    add: 'Escribe una nueva categoría'
  };
  
  return (
    <>
      <div>
        <h2>GifExpertApp</h2>
        <AddItem items={categories} setItems={setCategories} placeholder={placeholder.add} />
      </div>
      <hr />
      <div id='categories'>
        <ol>{categories.map(category => <GifGrid key={category} category={category} />)}</ol>
      </div>
    </>
  );
};

export default GifExpertApp;
