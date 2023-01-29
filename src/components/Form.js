import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/contactSlice';
import { Button, TextField } from '@mui/material';


function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  

  const formSubmitHandler = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name}  is already in contacts`);
      return;
    }
    dispatch(addContacts(data));
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

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmitForm = event => {
    formSubmitHandler({ name, number });
    resetForm();
  };


  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <TextField
        {...register('name')}
        error={Boolean(errors.name?.message)}
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
        required
        sx={{ mr: 1 }}
      />
      <TextField
        {...register('number')}
        error={Boolean(errors.number?.message)}
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
        required
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add contact
      </Button>
    </form>
  );
}

export default Form;
