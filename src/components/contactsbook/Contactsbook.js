import React, { useState, useEffect } from 'react';
import {
  TitlePhonebook,
  BoxPhonebook,
  TitleContacts,
} from './contactsBook.styled';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

function ContactsBook() {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name}  is already in contacts`);
      return;
    }
    data.id = nanoid();
    setContacts(prevState => [...prevState, data]);
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContacts = contactId => {
    
    setContacts(contacts.filter(contact => contact.id !== contactId));
  
  };

  

  const onFiltrationContact = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BoxPhonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form onSubmit={formSubmitHandler} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={onFiltrationContact(contacts, filter)}
        onDeleteContact={deleteContacts}
      />
      {contacts.length === 0 && <p>Contactlist empty. Please add contact.</p>}
    </BoxPhonebook>
  );
}

export default ContactsBook;
