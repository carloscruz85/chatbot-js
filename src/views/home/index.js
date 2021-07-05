import React, { useState, useEffect } from 'react'
import './index.scss'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import MyHeader from '../../parts/myHeader'
import Theme from '../../config/theme'


import axios from 'axios'

const App = () => {
  const [show, setShow] = useState(false)
  const [questions, setQuestions] = useState([])
  const chatIcon = 'www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/chat.png'
  const Bot = 'www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/bot.png'
  const User ='www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/user.png'

  useEffect(() => {
    // console.log('www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/chat.png');
    axios
    .get('http://localhost/carloscruz85/wp-json/ccruz85/v2/questions')
      .then(function (response) {
        // console.log(response.data);
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
          botAvatar={Bot}
          userAvatar={User}
          opened={show}
          //hideSubmitButton={true}
          toggleFloating={toggleFloating}
          floating={true}
          floatingIcon={chatIcon}
        /> : null
        }
  
      </ThemeProvider>
    </div>
  )
}

export default App
