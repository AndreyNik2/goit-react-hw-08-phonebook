import {
  TitlePhonebook,
  BoxPhonebook,
  TitleContacts,
} from './contactsBook.styled';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';

function ContactsBook() {
  const contacts = useSelector(getContacts);

  return (
    <BoxPhonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form/>
      <TitleContacts>Contacts</TitleContacts>
      <Filter/>
      <ContactList/>
      {contacts.length === 0 && <p>Contactlist empty. Please add contact.</p>}
    </BoxPhonebook>
  );
}

export default ContactsBook;
