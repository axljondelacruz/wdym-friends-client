import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Room = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Room page
      </Typography>
      <Link to="/">Go home</Link>
    </Box>
  );
};

export default Room;
