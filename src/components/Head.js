import Typography from '@mui/material/Typography'
import { useSocketStateContext } from '../context/SocketContext'

const Head = () => {
  const { socket } = useSocketStateContext()

  return <Typography>{socket.id}</Typography>
}

export default Head
