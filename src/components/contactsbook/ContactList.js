import { ContactItem, DeleteButton, Contact, List } from './ContactList.styled';
import { getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onFiltrationContact = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {onFiltrationContact(contacts, filter).map(contact => (
        <ContactItem key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <DeleteButton
            onClick={() => deleteContacts(contact.id)}
            type="button"
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </List>
  );
};



export default ContactList;
