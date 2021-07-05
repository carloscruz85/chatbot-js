import React from 'react'


const ToSearch = (props) => {

  const data = {
    en: `
    Searching ${props.steps.form.message}
    `,
    es:
    `
    Buscando ${props.steps.form.message}
    `
  }

  window.location = 'https://elsalvador.travel/?s=' + props.steps.form.message

    return (
      <div dangerouslySetInnerHTML={{__html:  data[props.lg]}}>
       
      </div>
    )
  }
  export default ToSearch