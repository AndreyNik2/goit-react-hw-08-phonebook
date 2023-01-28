
import { Box } from '@mui/material';
import LoginForm from 'components/contactsbook/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Login() {
  return (
    <HelmetProvider>
      <main>
        <Box sx={{width:"1200px", margin:'30px auto', }}>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <LoginForm />
        </Box>
      </main>
    </HelmetProvider>
  );
}
