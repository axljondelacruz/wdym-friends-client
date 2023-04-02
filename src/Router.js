import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Room from './routes/room'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  )
}

export default Router
