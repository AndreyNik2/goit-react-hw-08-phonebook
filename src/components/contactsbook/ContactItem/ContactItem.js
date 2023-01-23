import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import FormEdit from '../FormEdit';

import { DeleteButton, Contact } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const dispatch = useDispatch();

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

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
    };
    
    const onClickEdit = () => {
        setIsModalOpen(true);
    }

    const closeModalEdit = () => {
        setIsModalOpen(null);
    }

   

  return (
    <>
      <Contact>
        {contact.name}: {contact.number}
      </Contact>
      <DeleteButton onClick={() => deleteContact(contact.id)} type="button">
        Delete
      </DeleteButton>
      <button onClick={onClickEdit}>Edit</button>
      <Modal
        isOpen={isModalOpen !== null}
        onRequestClose={closeModalEdit}
        style={modalStyles}
        shouldCloseOnEsc={isModalOpen !== null}
      >
        <FormEdit contact={contact} closeModal={() => {closeModalEdit()}} />
      </Modal>
    </>
  );
};
