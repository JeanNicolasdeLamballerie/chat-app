
import React from 'react';
import './Contact.css';

function Contact({ name, avatar, online }) {
  return (
    <div className="Contact">
      <img src={avatar} className='avatar' />
      <div>
        <div className='name'>{name}</div>
        <div className='status'>
          <div className='status-text'>
            <div className={online ? 'status-online' : 'status-offline'}></div>
            {online ? 'Online' : 'Offline'}</div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
