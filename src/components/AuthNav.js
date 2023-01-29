import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
// import * as yup from 'yup';


export const AuthNav = () => {



  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        component={NavLink}
        to="/register"
        sx={{ mr: 1 }}
      >
        Register
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component={NavLink}
        to="/login"
      >
        Log In
      </Button>
    </div>
  );
};