import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import ContactRow from './ContactRow';

const dummyContacts = [
  { "id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com" },
  { "id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com" },
  { "id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com" }
]


const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  const contactName = contacts.map((contact) => {
    return contact.name
  })
  const contactPhone = contacts.map((contact) => {
    return contact.phone
  })
  const contactEmail = contacts.map((contact) => {
    return contact.email
  })


  
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
      <ContactList contacts={contacts}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
