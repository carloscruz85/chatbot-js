import React, { useState, useEffect } from 'react'
import './index.scss'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import MyHeader from '../../parts/myHeader'
import Theme from '../../config/theme'
import Chat from '../../assets/media/chat.png'
import Bot from '../../assets/media/bot.png'
import User from '../../assets/media/user.png'
import axios from 'axios'

const App = () => {
  const [show, setShow] = useState(false)
  const [questions, setQuestions] = useState([])
  const [images, setImages] = useState( {chat: '', bot: '', user:''} )
  useEffect(() => {
  

    const getUrl = window.location;
    let baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    baseUrl = document.location.origin
    baseUrl = 'http://localhost/carloscruz85/'
    // console.log(baseUrl);
    
    setImages( 
      {
        chat: baseUrl+'/wp-content/plugins/cc85-chatbox/img/chat.png',
        bot: baseUrl+'/wp-content/plugins/cc85-chatbox/img/bot.png',
        user: baseUrl+'/wp-content/plugins/cc85-chatbox/img/user.png',
      }
     )

    // console.log('check ', baseUrl+'/wp-json/ccruz85/v2/questions');

    axios
    .get(baseUrl+'/wp-json/ccruz85/v2/questions')
      .then(function (response) {
        // console.log(response.data);
        response.data[1].options.push(
          {
            value: 5,
            label: 'Cerrar Chat',
            trigger: () => {
              close()
              return '2'
            },
          }
        )

        response.data[response.data.length - 1].options.push( 
          {
            value: 5,
            label: 'Cerrar Chat',
            trigger: () => {
              close()
              return '2'
            },
          }
         )
        // console.log(response.data[response.data.length - 1].options);
        

        setQuestions(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, []);


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
        {
          questions.length !== 0 ? <ChatBot
          steps={questions}
          botDelay="500"
          headerComponent={<MyHeader />}
          botAvatar={images.bot}
          userAvatar={images.user}
          opened={show}
          //hideSubmitButton={true}
          toggleFloating={toggleFloating}
          floating={true}
          floatingIcon={images.chat}
        /> : null
        }
  
      </ThemeProvider>
    </div>
  )
}

export default App
