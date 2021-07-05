import React from 'react'
import Mail from '../assets/media/mail.png'

const MyHeader = () => {
    return (
      <div className="my-chat-header">
        <img className="my-chat-mail-image" src={Mail} alt="" />
      </div>
    )
  }
  export default MyHeader