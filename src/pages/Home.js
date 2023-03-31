import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Home page
      </Typography>
      <Link to="/room/1">Go to room 1</Link>
    </Box>
  );
};

export default Home;
