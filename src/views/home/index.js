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
    // baseUrl = 'http://localhost/carloscruz85/'
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

        // adjusting components

        let data = response.data.reduce( (acc, cu) => {
          // console.log(cu.component, "component" in cu);
          if( "component" in cu ){
            let newObj = {}
            newObj = {...cu, component: ( <div dangerouslySetInnerHTML={{
              __html:  `${cu.component}` 
              }} ></div> ) }
            acc.push( newObj )
            // console.log(newObj);
          }else{
            acc.push( cu )
          }
          
          return acc
        }, [] )

        // console.log(data);

        // console.log(response.data[response.data.length - 1].options);
        

        setQuestions(data)

   

      })
      .catch(function (error) {
        console.log(error)
      })

      //getting images from api
      console.log('getting images');
      axios
      .get(baseUrl+'/wp-json/ccruz85/v2/cc85chatbot')
        .then(function (response) {

          if( response.data !== false ){
            console.log(response.data);
              setImages(
                {
                  bot: response.data.machine_avatar,
                  user: response.data.user_chat_bot,
                  chat: response.data.chat_bot_image
                }
              )
          }
  
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
