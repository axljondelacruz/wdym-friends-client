import Room from './Room'
import { GameRoomContextProvider } from './Context'

const RoomRoute = () => {
  return (
    <GameRoomContextProvider>
      <Room />
    </GameRoomContextProvider>
  )
}

export default RoomRoute
