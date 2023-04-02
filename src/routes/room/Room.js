import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useGameRoomStateContext } from './Context';

const Room = () => {
  const { room } = useGameRoomStateContext();

  if (!room) {
    return <Link to="/">Go home</Link>;
  }

  console.log({ room });

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        {room.name}
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        {room.roomId}
      </Typography>
      <Box>
        <Typography variant="h6">Players</Typography>
        {room.players.map((player) => (
          <Typography key={player.id}>{player.id}</Typography>
        ))}
      </Box>
      <Link to="/">Go home</Link>
    </Container>
  );
};

export default Room;
