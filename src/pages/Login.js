
import { Box, CardMedia, Typography } from '@mui/material';
import LoginForm from 'components/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import image from '../images/hexagonal-background.jpg';


export default function Login() {
  return (
    <HelmetProvider>
      <main>
        <CardMedia
          image={image}
          padding="20px"
          sx={{ height: '100vh', marginTop: '5px' }}
        >
          <Box
            width="1200px"
            margin="0 auto"
            sx={{ textAlign: 'center', pt: 3 }}
          >
            <Typography variant="h2" sx={{ pb: 3 }}>
              Log In
            </Typography>
            <Helmet>
              <title>Login</title>
            </Helmet>
            <LoginForm />
          </Box>
        </CardMedia>
      </main>
    </HelmetProvider>
  );
}
