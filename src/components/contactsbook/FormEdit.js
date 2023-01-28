import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { editContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/contactSlice';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function FormEdit({ contact, closeModal }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contactId = contact.id;

  const formSubmitHandler = data => {
    console.log(data);
    const otherContacts = contacts.filter(item => item.id !== data.contactId);
    console.log(otherContacts);
    if (otherContacts.filter(item => item.name === data.name).length > 0) {
      alert(`${data.name}  is already in contacts`);
      return;
    }
    dispatch(editContacts(data));
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn('There is no such');
    }
  };

  const handleSubmitForm = event => {
    formSubmitHandler({ name, number, contactId });
    reset();
    closeModal();
  };

 

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <TextField
        {...register('name')}
        error={errors.name?.message}
        size="small"
        label="Name"
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        helperText={
          errors.name?.message &&
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        }
        sx={{ mr: 1 }}
        required
      />
      <TextField
        {...register('number')}
        error={errors.number?.message}
        size="small"
        label="Phone number"
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        helperText={
          errors.number?.message &&
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        }
        sx={{ mr: 1 }}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Edit contact
      </Button>
    </form>
  );
}

export default FormEdit;
