import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifSearchApp = () => {
  
  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes( newCategory )) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      {/* title */}
      <h1>Gif Search App</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ (value) => onAddCategory(value) }
        // onNewCategory={ onAddCategory }
      />

      {/* Gif List */}
      <ol>
        {
          categories.map( ( category ) => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}
