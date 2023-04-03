import Room from './Room'
import { GameRoomContextProvider } from './Context'
import Head from '../../components/Head'

const RoomRoute = () => {
  return (
    <GameRoomContextProvider>
      <Head />
      <Room />
    </GameRoomContextProvider>
  )
}

export default RoomRoute
