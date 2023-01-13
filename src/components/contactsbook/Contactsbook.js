import { useEffect } from 'react';
import {
  TitlePhonebook,
  BoxPhonebook,
  TitleContacts,
} from './contactsBook.styled';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { fetchContacts } from 'redux/operations';

function ContactsBook() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <BoxPhonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      {contacts.length === 0 && <p>Contactlist empty. Please add contact.</p>}
    </BoxPhonebook>
  );
}

export default ContactsBook;
