import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactSlice';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, CardMedia, Typography } from '@mui/material';
import image from '../images/hexagonal-background.jpg';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Form from 'components/Form';

function ContactsBook() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <CardMedia
        image={image}
        padding="20px"
        sx={{ height: '100vh', marginTop: '5px' }}
      >
        <Box width="1200px" margin="0 auto">
          <Typography variant="h6">Your contactbook</Typography>
          <Form />
          <Typography variant="h5">Contacts</Typography>
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
          {contacts.length === 0 && !isLoading && (
            <p>Contactlist empty. Please add contact.</p>
          )}
        </Box>
      </CardMedia>
    </main>
  );
}

export default ContactsBook;
