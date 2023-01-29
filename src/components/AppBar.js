import { useAuth } from 'hooks';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

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
