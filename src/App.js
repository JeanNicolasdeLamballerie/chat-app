import React from 'react';
import Contact from './components/Contact.jsx'
import './App.css';

const user = {
  name: 'Dio Brando',
  avatar: 'https://www.origamigne.com/shop/wp-content/uploads/2019/04/Dio_Brando_origamigne_Migne_Huynh.jpg',
  online: false
}
const user2 = {
  name: 'Satou Kazuma',
  avatar: 'https://i.etsystatic.com/17763660/r/il/5387a5/1696306644/il_794xN.1696306644_o5j5.jpg',
  online: true
}
const user3 = {
  name: 'Aqua',
  avatar: 'https://ih1.redbubble.net/image.358838235.6847/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg',
  online: true
}

function App() {
  return (
    <>
      <Contact {...user} />
      <Contact {...user2} />
      <Contact {...user3} />
    </>
  );
}

export default App;
