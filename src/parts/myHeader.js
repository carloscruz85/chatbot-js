import React from 'react'
// import Chat from '../assets/media/chat.png'

const MyHeader = () => {

  // const chatIcon = 'www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/chat.png'
  const getUrl = window.location;
  let baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  // baseUrl = 'http://localhost/carloscruz85/'
  // console.log(baseUrl+'wp-content/plugins/cc85-chatbox/img/chat.png');
    return (
      <div className="my-chat-header">
        <img className="my-chat-mail-image" alt="chat" src={baseUrl+'/wp-content/plugins/cc85-chatbox/img/chat.png'} alt="" />
      </div>
    )
  }
  export default MyHeader