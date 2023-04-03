import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useGameRoomStateContext } from './Context'
import { useSocketDispatchContext } from '../../context/SocketContext'

const Room = () => {
  const { room } = useGameRoomStateContext()
  const { leaveRoom } = useSocketDispatchContext()

  if (!room) {
    return <Link to="/">Go home</Link>
  }

  const leaveRoomHandler = () => leaveRoom(room.roomId)

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
      <Button onClick={() => leaveRoomHandler()}>Go home</Button>
    </Container>
  )
}

export default Room
