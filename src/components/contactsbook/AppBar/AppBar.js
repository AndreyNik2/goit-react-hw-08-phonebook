import { Navigation } from 'components/contactsbook/Navigation/Navigation';
import { useAuth } from 'hooks';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';


export const AppBarContacts = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar component="header" position="static" color="transparent">
      <Box width="1200px" margin="0 auto">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" shadow="1">
            Contactbook
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
