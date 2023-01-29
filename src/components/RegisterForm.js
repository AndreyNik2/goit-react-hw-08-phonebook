import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        size="small"
        type="text"
        name="name"
        label="Username"
        required
        autoComplete="off"
        sx={{ mr: 1 }}
      />
      <TextField
        size="small"
        type="email"
        name="email"
        label="Email"
        required
        autoComplete="off"
        sx={{ mr: 1 }}
      />
      <TextField
        size="small"
        type="password"
        name="password"
        label="Password"
        required
        autoComplete="off"
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}
