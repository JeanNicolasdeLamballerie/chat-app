import React from 'react';
import Contact from './components/Contact.jsx'
import './App.css';
import contactList from './components/contactList'

function App() {

  return (
  

      contactList.map(x => <Contact name={x.name} avatar={x.avatar} online={x.online}/>)


  );
}


export default App;
