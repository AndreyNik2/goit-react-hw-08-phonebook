import React, { useState } from 'react';
import Modal from 'react-modal';
import { ContactItem, DeleteButton, Contact, List } from './ContactList.styled';
import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSlice';
import { deleteContacts } from 'redux/contacts/operations';
import FormEdit from '../FormEdit';


const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ContactList = () => {
  const [onEditModal, setOnEditModal] = useState(null);
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

  const onClickEditContact = () => {
   setOnEditModal(true);
    
  };

  const resetContact = () => {
    setOnEditModal(null)
  }

  return (
    <>
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
            <button onClick={onClickEditContact}>Edit</button>
            <Modal
              isOpen={onEditModal !== null}
              onRequestClose={resetContact}
              style={modalStyles}
              shouldCloseOnEsc={onEditModal !== null}
            >
              <FormEdit contact={contact} />
            </Modal>
          </ContactItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
