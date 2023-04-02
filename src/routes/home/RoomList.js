import React from 'react'
import { useSocketStateContext } from '../../context/SocketContext.js'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const RoomList = () => {
  const { rooms } = useSocketStateContext()

  const [s, setS] = React.useState(rooms)

  React.useEffect(() => {
    setS(rooms)
  }, [rooms])

  if (rooms.length) {
    return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 3 }}>
        <Typography variant="h6">Current rooms:</Typography>
        <List>
          {s.map((room) => (
            <React.Fragment key={room.id}>
              <ListItem disablePadding>
                <ListItemButton>
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
