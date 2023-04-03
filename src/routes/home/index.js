import Box from '@mui/material/Box'
import './styles.css'
import Header from './Header'
import RoomList from './RoomList'
import Head from '../../components/Head'

const Home = () => {
  return (
    <div className="parent">
      <Box
        sx={{
          padding: 6,
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255,255, 0.7)',
        }}
      >
        <Head />
        <Header />
        <RoomList />
      </Box>
    </div>
  )
}

export default Home
