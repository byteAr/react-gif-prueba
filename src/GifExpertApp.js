import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

  /*   const handAdd = () => {
       //setCategories(['marcos lopez', ...categories]);
       setCategories( cats => [...cats, 'Marcos']);
       
    } */


    return (
        <>
            <h2>Buscardor de Gifs</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />            

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key={ category }
                        category={ category } />
                    )
                }
            </ol>
        </>
    )
}
