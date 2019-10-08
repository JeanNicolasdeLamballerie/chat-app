import React from 'react';
import Contact from './components/Contact.jsx'
import './App.css';
import contactList from './components/contactList'

function App() {

  return (
  
    <>
      {contactList.map(x => Contact(x))}

    </>
  );
}


export default App;
