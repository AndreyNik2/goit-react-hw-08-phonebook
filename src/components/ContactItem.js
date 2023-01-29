import { Button, ListItem, Typography } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import FormEdit from './FormEdit';

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
  };

  const closeModalEdit = () => {
    setIsModalOpen(null);
  };

  return (
    <ListItem>
      <Typography
        sx={{ mr: 1, width: '100px', overflowWrap: 'anywhere' }}
        variant="subtitle1"
      >
        {contact.name}:
      </Typography>
      <Typography
        sx={{ mr: 1, width: '150px', overflowWrap: 'anywhere' }}
        variant="subtitle1"
      >
        {contact.number}
      </Typography>
      <Button
        sx={{ mr: 1 }}
        type="button"
        variant="outlined"
        color="primary"
        onClick={onClickEdit}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => deleteContact(contact.id)}
        type="button"
      >
        Delete
      </Button>
      <Modal
        isOpen={isModalOpen !== null}
        onRequestClose={closeModalEdit}
        style={modalStyles}
        shouldCloseOnEsc={isModalOpen !== null}
      >
        <FormEdit
          contact={contact}
          closeModal={() => {
            closeModalEdit();
          }}
        />
      </Modal>
    </ListItem>
  );
};
