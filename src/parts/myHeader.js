import React from 'react'
// import Mail from '../assets/media/mail.png'

const MyHeader = () => {

  const chatIcon = 'www.'+window.location.hostname+'/wp-content/plugins/cc85-chatbox/img/chat.png'

    return (
      <div className="my-chat-header">
        <img className="my-chat-mail-image" src={chatIcon} alt="" />
      </div>
    )
  }
  export default MyHeader