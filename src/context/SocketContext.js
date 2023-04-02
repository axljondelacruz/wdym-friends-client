/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useNavigate, useLocation } from "react-router-dom";
import { io } from 'socket.io-client'

const SocketStateContext = createContext()
const SocketDispatchContext = createContext()

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState({})
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState()
  const navigate = useNavigate()
  // const location = useLocation();

  useEffect(() => {
    const socket = io('localhost:8080')
    setSocket(socket)

    console.log({ socket })

    socket.on('connected', (payload) => {
      console.log('conntected: ', payload)
      setRooms(payload)
    })

    socket.on('room:get', (payload) => {
      console.log('room:get: ', payload)
      setRoom(payload)
    })

    socket.on('room:created', (payload) => {
      console.log('room:created: ', payload)
      setRooms(payload)
    })
  }, [])

  const value = useMemo(
    () => ({
      room,
      rooms,
      socket,
      navigate,
    }),
    [room, rooms, socket, navigate]
  )

  const actionValues = useMemo(
    () => ({
      setRooms,
      setRoom,
    }),
    [setRooms, setRoom]
  )

  return (
    <SocketStateContext.Provider value={value}>
      <SocketDispatchContext.Provider value={actionValues}>
        {children}
      </SocketDispatchContext.Provider>
    </SocketStateContext.Provider>
  )
}

const useSocketStateContext = () => useContext(SocketStateContext)
const useSocketDispatchContext = () => useContext(SocketDispatchContext)

export {
  SocketContextProvider,
  useSocketStateContext,
  useSocketDispatchContext,
}
