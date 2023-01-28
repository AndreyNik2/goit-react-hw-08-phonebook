import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        component="p"
        variant="body2"
        sx={{ display: 'inline', mr: 1 }}
      >
        Welcome,
      </Typography>
      <Typography component="span" variant="body1" sx={{ mr: 1 }}>
        {user.name}
      </Typography>
      <AccountCircleIcon sx={{ mr: 1 }} />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(logOut())}
        to="/contacts"
      >
        Logout
      </Button>
    </Box>
  );
};
