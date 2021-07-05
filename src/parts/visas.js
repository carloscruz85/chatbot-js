import React from 'react'
const Visas = (props) => {

  const data = {
    en: `
    You can check which countries need a visa to enter El Salvador
        <br />
        <a
          target = "_ blank"
          rel = "noopener noreferrer"
          href = "https://rree.gob.sv/visas/"
        >
          clicking here
        </a>
        <p>
          Some visa-exempt nationalities may require
          <strong> MIGRATORY ENTRY CARD </strong>, which is acquired in
          the border points of entry to the country and has a cost of
          <strong> US $ 10 or US $ 12 </strong>
        </p>
        <p>
          If your country is not listed then you will need to apply to a
          <strong> Consular Visa </strong> in one of the Representations
          Diplomat of El Salvador abroad or a
          <strong> Consulted Visa </strong> to be obtained through the
          Ministry of Foreign Relations of El Salvador. For the above it is
          highly recommended that you check the
          <a
            target = "_ blank"
            rel = "noopener noreferrer"
            href = "http://www.migracion.gob.sv/"
          >
            website of the General Directorate of Migration and Foreigners.
          </a>
        </p>
    `,
    es:
    `
    Puedes consultar qué países necesitan visa para ingresar a El Salvador
    <br />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://rree.gob.sv/visas/"
    >
      dando click acá
    </a>
    <p>
      Algunas nacionalidades exentas de visa pueden requerir
      <strong>TARJETA MIGRATORIA DE INGRESO</strong>, la cual se adquiere en
      los puntos fronterizos de ingreso al país y tiene un costo de
      <strong>US$10 o US$12</strong>
    </p>
    <p>
      Si su país no está enlistado entonces necesitará aplicar a una
      <strong>Visa Consular</strong>en una de las Representación
      Diplomática de El Salvador en el exterior o una
      <strong>Visa Consultada</strong>a obtenerse a través del
      Ministerio de Relaciones Exteriores de El Salvador. Por lo anterior es
      altamente recomendado que revise en la
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.migracion.gob.sv/"
      >
        página web de la Dirección General de Migración y Extranjería.
      </a>
    </p>
    `
  }

    return (
      <div dangerouslySetInnerHTML={{__html:  data[props.lg]}}>
       
      </div>
    )
  }

  export default Visas