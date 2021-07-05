import React from 'react'
const Ingreso = (props) => {

    const data = {
      en: `
      <li> Passport </li>
        <li>
          Tourist Visa (if required)
          <br />
          You can check which countries need a visa to enter El Salvador
          <br />
          <a
            target = "_ blank"
            rel = "noopener noreferrer"
            href = "https://rree.gob.sv/visas/"
          >
            clicking here
          </a>
        </li>
        <li> Tourist card </li>
        <li>
          They must present a negative test for coronavirus and the
          test must be taken within a period of no more than 72 hours before the
          trip We invite you to enter <br />
          <a
            href = "https://elsalvador.travel/about/?lg=es"
            rel = "noopener noreferrer"
            target = "_ blank"
          >
            Entrance to El Salvador
          </a>
          to know the data in more detail.
        </li>
        <li>
          <strong>
            Additionally, all migrants must take into consideration the
            following:
          </strong>
          
          <ul>
            <li>
              The maximum length of stay that can be granted as a
              tourist is 90 days. If an extension is required, it may be requested
              one in the year.
            </li>
            <li>
              All the countries of South America and Africa, as well as Panama require
              for the entrance, that the visitor has 
              <strong> vaccinated against yellow fever </strong>  15 days
              prior to your trip to El Salvador and you must carry the certificate or
              record of said vaccine since it could be requested by the
              health authorities of El Salvador at the point of entry to the
              territory.
            </li>
      `,
      es:
      `
      <li>Pasaporte</li>
        <li>
          Visa de Turismo (si es requerido)
          <br />
          Puedes consultar qué países necesitan visa para ingresar a El Salvador
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rree.gob.sv/visas/"
          >
            dando click acá
          </a>
        </li>
        <li>Tarjeta de turismo </li>
        <li>
          Deben presentar una prueba con resultado negativo de coronavirus y la
          prieba debe de ser tomada en un plazo no mayor a 72 horas antes del
          viaje Te invitamos a ingresar a <br />
          <a
            href="https://elsalvador.travel/about/?lg=es"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ingreso a El Salvador
          </a>
          para conocer los datos más a detalle.
        </li>
        <li>
          <strong>
            Adicionalmente, todos los migrantes deben tomar en consideración lo
            siguiente:
          </strong>
          &nbsp;
          <ul>
            <li>
              El tiempo máximo de estadía que puede otorgarse en calidad de
              turista es de 90 días. Si se requiere prórroga, podrá solicitarse
              una en el año.
            </li>
            <li>
              Todos los países de Suramérica y África, así como Panamá requieren
              para el ingreso, que el visitante se haya&nbsp;
              <strong>vacunado contra la fiebre amarilla</strong>&nbsp;15 día
              previos a su viaje a El Salvador y deberá portar el certificado o
              cartilla de dicha vacuna ya que pudiese ser solicitada por las
              autoridades de salud de El Salvador en el punto de ingreso al
              territorio.
            </li>
          </ul>
        </li>
      `
    }

    return (
      <ul className="answer" dangerouslySetInnerHTML={{__html:  data[props.lg]}}>
  
      </ul>
    )
  }

  export default Ingreso