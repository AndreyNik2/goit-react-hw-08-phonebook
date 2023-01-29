import { Box, CardMedia, Typography } from '@mui/material';
import RegisterForm from 'components/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import image from '../images/hexagonal-background.jpg';


export default function Register() {
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
              Registr a new acount
            </Typography>
            <Helmet>
              <title>Registration</title>
            </Helmet>
            <RegisterForm />
          </Box>
        </CardMedia>
      </main>
    </HelmetProvider>
  );
}
