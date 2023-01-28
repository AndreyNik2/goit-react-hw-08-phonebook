import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onFiltrationContact = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(normalizedFilter)
    );
    
    return filteredContacts
      .sort((firstContact, secondContacts) =>
        firstContact.name.localeCompare(secondContacts.name)
      )
  };

  return (
    <>
      <List>
        {onFiltrationContact(contacts, filter).map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
