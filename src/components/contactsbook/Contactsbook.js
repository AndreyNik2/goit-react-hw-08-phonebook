import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
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
import { getContacts, getIsLoading } from 'redux/contactSlice';
import { fetchContacts } from 'redux/operations';

function ContactsBook() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
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
      <ColorRing
        visible={Boolean(isLoading)}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      <ContactList />
      {contacts.length === 0 && !isLoading && <p>Contactlist empty. Please add contact.</p>}
    </BoxPhonebook>
  );
}

export default ContactsBook;
