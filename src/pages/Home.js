import { Box, CardMedia, Typography } from "@mui/material";
import image from '../images/hexagonal-background.jpg';

export default function Home() {
  return (
    <main>
      <CardMedia
        image={image}
        padding="20px"
        sx={{ height: '100vh', marginTop: '5px' }}
      >
        <Box width="1200px" margin="0 auto" sx={{ textAlign: 'center', pt:3 }}>
          <Typography variant="h2">
            Store your contact in Contactbook
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', pt:2 }}>
            You can store your contacts here. Your contacts are securely
            protected with our service.
          </Typography>
        </Box>
      </CardMedia>
    </main>
  );
}
