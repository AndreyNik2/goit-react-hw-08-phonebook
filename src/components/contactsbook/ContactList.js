import { ContactItem, DeleteButton, Contact, List } from './ContactList.styled';
import { getFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { deleteContacts } from 'redux/operations';

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

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
  

  return (
    <List>
      {onFiltrationContact(contacts, filter).map(contact => (
        <ContactItem key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <DeleteButton
            onClick={() => deleteContact(contact.id)}
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
