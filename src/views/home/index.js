import React, { useState } from 'react'
import './index.scss'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import Texts from '../../parts/texts'
import Ingreso from '../../parts/ingreso'
import Visas from '../../parts/visas'
import MyHeader from '../../parts/myHeader'
import Theme from '../../config/theme'
import Search from '../../parts/search'
import ToSearch from '../../parts/toSearch'

const App = () => {
  const [show, setShow] = useState(false)

  let language = 'en'
  const urlParams = new URLSearchParams(window.location.search)
  const Templg = urlParams.get('lg')

  switch (Templg) {
    case null:
      language = 'en'
      break
    case 'es':
      language = Templg
      break
    default:
      language = 'en'
      break
  }

  const DinamicText = (props) => {
    return <div>{Texts[props.t][language]}</div>
  }

  const categories = [
    {
      value: 2,
      label: Texts.requirements[language],
      trigger: 'requirements',
    },
    {
      value: 3,
      label: Texts.information[language],
      trigger: () => {
        window.location = 'https://elsalvador.travel/about/?lg=' + language
      },
    },
    { value: 4, label: Texts.todo[language], trigger: 'queHacer' },
    {
      value: 7,
      label: Texts.search[language],
      trigger: 'search',
    },
    {
      value: 6,
      label: Texts.language[language],
      trigger: () => {
        const currentUrl = window.location.href
        let newUrl = window.location.href
        

        switch (language) {
          case 'es':
            newUrl = currentUrl.replace('lg=es', 'lg=en')
            break

          case 'en':
            newUrl = currentUrl.replace('lg=en', 'lg=es')
            break

          default:
            newUrl = currentUrl
            break
        }
        //if there are not language parameters in url
        if( Templg === null )
        newUrl = currentUrl + '?lg=es'

        window.location = newUrl
      },
    },
   
    {
      value: 5,
      label: Texts.close[language],
      trigger: () => {
        close()
        return '3'
      },
    },
  ]

  const Mas = [
    {
      value: 1,
      label: Texts.back[language],
      trigger: '3',
    },
    {
      value: 5,
      label: Texts.close[language],
      trigger: () => {
        close()
        return '3'
      },
    },
  ]

  const QueHacer = [
    {
      value: 1,
      label: 'Surf City',
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/surfcity/?lg=' + language
      },
    },
    {
      value: 2,
      label: Texts.towns[language],
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/town/?lg=' + language
      },
    },
    {
      value: 3,
      label: Texts.lakes[language],
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/lakes-and-mountains/?lg=' +
          language
      },
    },
    {
      value: 4,
      label: Texts.culture[language],
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/culture/?lg=' + language
      },
    },
    {
      value: 5,
      label: Texts.parks[language],
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/parks/?lg=' + language
      },
    },
    {
      value: 6,
      label: Texts.wellness[language],
      trigger: () => {
        window.location =
          'https://elsalvador.travel/travel-category/wellness/?lg=' + language
      },
    },
  ]

  const RequirementsOptions = [
    {
      value: 1,
      label: Texts.requirement[language],
      trigger: 16,
    },
    {
      value: 2,
      label: Texts.visas[language],
      trigger: 17,
    },
  ]

  const steps = [
    /*{
      id: '1',
      component: <img className="cusuco" src="https://elsalvador.travel/chatbox/media/cusuco.png" alt="cusuco" />,
      trigger: 2,
    },*/
    {
      id: '2',
      //message: Texts.welcome.en,
      component: <DinamicText t="welcome" />,
      asMessage: true,
      trigger: '3',
    },
    {
      id: '3',
      options: categories,
    },
    {
      id: '4',
      options: Mas,
    },
    // {
    //   id: '5',
    //   options: instOptions,
    // },
    {
      id: '6',
      message: 'MITUR, CORSATUR e ISTU',
      trigger: '4',
    },
    {
      id: '7',
      message:
        'Es el Ministerio de Turismo, organismo rector en materia turística.',
      trigger: '4',
    },
    {
      id: '8',
      message:
        'Determina y vela por el cumplimiento de la política y del plan nacional de Turismo.',
      trigger: '4',
    },
    {
      id: '9',
      message: 'Es la Corporación Salvadoreña de Turismo.',
      trigger: '4',
    },
    {
      id: '10',
      message:
        'Su finalidad principal es la promoción de los sitios más atractivos del país fomentando la inversión extranjera y nacional.',
      trigger: '4',
    },
    {
      id: '11',
      message: 'Es el instituto Salvadoreño de Turismo.',
      trigger: '4',
    },
    {
      id: '12',
      message:
        'Su finalidad es la administración de los Centros Recreativos de su propiedad. También tendrá a su cargo la promoción y estímulo de la recreación familiar, social y excursionismo, en lo que se refiere a la atracción de visitantes hacia dichos centros.',
      trigger: '4',
    },
    {
      id: '13',
      message:
        'Parque Acuático Apulo, parque Balboa, Parque Puerta del Diablo, Parque Walter Thilo Deininger, Parque Acuático Los Chorros, Parque acuático Toma de Quezaltepeque, Parque nacional Cerro verde, Parque acuático Sihuatehuacán, Parque acuático Atecozol, Parque acuático Amapulapa, Parque acuático Laguna de Apastepeque, parque acuático Altos de Las Cueva, Parque acuático Costa del Sol, Parque acuático Ichanmichen, Parque acuático Agua fría.',
      trigger: '4',
    },
    {
      id: '14',
      message:
        'Registro Nacional de Turismo. Es un registro público administrado por CORSATUR, donde se inscriben Empresas Turísticas nacionales y/o internacionales.',
      trigger: '4',
    },
    {
      id: 'requirements',
      options: RequirementsOptions,
    },
    {
      id: '16',
      component: <Ingreso lg={language} />,
      trigger: '4',
    },
    {
      id: '17',
      component: <Visas lg={language} />,
      trigger: '4',
    },
    {
      id: 'queHacer',
      options: QueHacer,
    },
    {
      id: 'end',
      message: 'Bye!',
      end: true,
    },
    {
      id: 'search',
      component: <Search lg={language} />,
      asMessage: true,
      trigger: 'form'
    },
    {
      id: 'form',
      // message: 'Search',
      user: true,
      trigger: 'toSearch'
    },
    {
      id: 'toSearch',
      
      component: <ToSearch lg={language} />,
      asMessage: true,
      end: true
      // waitAction: true,
    }
  ]

  const close = () => {
    //console.log('cerrando')
    setShow(false)
  }

  const toggleFloating = ({ opened }) => {
    setShow({ opened })
  }

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <ChatBot
          steps={steps}
          botDelay="500"
          headerComponent={<MyHeader />}
          botAvatar="https://elsalvador.travel/chatbox/media/bot.png"
          userAvatar="https://elsalvador.travel/chatbox/media/user.png"
          opened={show}
          //hideSubmitButton={true}
          toggleFloating={toggleFloating}
          floating={true}
          floatingIcon="https://elsalvador.travel/chatbox/media/button.png"
        />
      </ThemeProvider>
    </div>
  )
}

export default App
