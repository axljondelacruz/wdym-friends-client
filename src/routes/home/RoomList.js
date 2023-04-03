import React from 'react'
import {
  useSocketDispatchContext,
  useSocketStateContext,
} from '../../context/SocketContext.js'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const RoomList = () => {
  const { rooms } = useSocketStateContext()
  const { findRoom } = useSocketDispatchContext()

  const joinRoomHandler = (roomId) => findRoom(roomId)

  if (rooms.length) {
    return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 3 }}>
        <Typography variant="h6">Current rooms:</Typography>
        <List>
          {rooms.map((room) => (
            <React.Fragment key={`room-${room.roomId}`}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => joinRoomHandler(room.roomId)}>
                  <ListItemText primary={room.name} />
                </ListItemButton>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    )
  }

  return false
}

export default RoomList
