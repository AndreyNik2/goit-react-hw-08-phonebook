import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Button variant="outlined" color="primary" component={NavLink} to="/" sx={{mr:1}}>
        <HomeIcon sx={{ mr: 1 }} />
        Home
      </Button>

      {isLoggedIn && (
        <Button
          variant="outlined"
          color="primary"
          component={NavLink}
          to="/contacts"
        >
          <ContactPhoneIcon sx={{ mr: 1 }} />
          Contacts
        </Button>
      )}
    </nav>
  );
};
