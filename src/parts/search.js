import React from 'react'


const Search = (props) => {

  const data = {
    en: `
    Type a simple search, like: El Tunco
    `,
    es:
    `
    Digita una busqueda sencilla, por ejemplo: El Tunco
    `
  }

    return (
      <div dangerouslySetInnerHTML={{__html:  data[props.lg]}}>
       
      </div>
    )
  }
  export default Search