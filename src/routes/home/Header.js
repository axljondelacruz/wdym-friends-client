import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import './styles.css'
import { useSocketStateContext } from '../../context/SocketContext.js'
import TextField from '@mui/material/TextField'

const DEFAULT = 'DEFAULT'
const NEW_ROOM = 'NEW_ROOM'
const FIND_ROOM = 'FIND_ROOM'

const Home = () => {
  const [buttons, setButtons] = useState(DEFAULT)
  const { socket, navigate } = useSocketStateContext()

  const [roomId, setRoomId] = useState('')
  const [roomName, setRoomName] = useState('')

  const createRoomHandler = () => {
    socket.emit('room:create', { name: roomName }, (err, id) => {
      if (err) {
        throw new Error(err)
      } else {
        navigate(`/room/${id}`)
      }
    })
  }

  const findRoomHandler = () => {
    socket.emit('room:join', { roomId }, (err, id) => {
      if (err) {
        throw new Error(err)
      } else {
        navigate(`/room/${id}`)
      }
    })
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Home page
      </Typography>
      {buttons === NEW_ROOM && (
        <TextField
          label="Enter Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          variant="outlined"
        />
      )}
      {buttons === FIND_ROOM && (
        <TextField
          label="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          variant="outlined"
        />
      )}
      <Stack direction="row" spacing={2}>
        {buttons === DEFAULT && (
          <React.Fragment>
            <Button variant="contained" onClick={() => setButtons(NEW_ROOM)}>
              New Room
            </Button>
            <Button variant="contained" onClick={() => setButtons(FIND_ROOM)}>
              Find Room
            </Button>
          </React.Fragment>
        )}
        {buttons === NEW_ROOM && (
          <React.Fragment>
            <Button variant="contained" onClick={() => createRoomHandler()}>
              Create room
            </Button>
            <Button variant="contained" onClick={() => setButtons(DEFAULT)}>
              Back
            </Button>
          </React.Fragment>
        )}
        {buttons === FIND_ROOM && (
          <React.Fragment>
            <Button variant="contained" onClick={() => findRoomHandler()}>
              Go
            </Button>
            <Button variant="contained" onClick={() => setButtons(DEFAULT)}>
              Back
            </Button>
          </React.Fragment>
        )}
      </Stack>
    </Box>
  )
}

export default Home
