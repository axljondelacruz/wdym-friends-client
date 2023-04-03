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

  const leaveRoom = (roomId) => {
    socket.emit('room:leave', { roomId }, (err, id) => {
      if (err) {
        throw new Error(err)
      } else {
        setRoom()
        navigate('/')
      }
    })
  }

  const createRoom = (name) => {
    socket.emit('room:create', { name }, (err, id) => {
      if (err) {
        throw new Error(err)
      } else {
        // navigate(`/room/${id}`)
      }
    })
  }

  const findRoom = (roomId) => {
    socket.emit('room:join', { roomId }, (err, id) => {
      if (err) {
        throw new Error(err)
      } else {
        // navigate(`/room/${id}`)
      }
    })
  }

  useEffect(() => {
    const socket = io('localhost:8080')
    setSocket(socket)

    socket.on('connected', (payload) => {
      setRooms(payload)
    })

    socket.on('room:get', (payload) => {
      setRoom(payload)
      navigate(`/room/${payload.roomId}`)
    })

    socket.on('rooms:update', (payload) => {
      setRooms(payload)
    })

    socket.on('room:update', (payload) => {
      setRoom(payload)
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
      createRoom,
      findRoom,
      leaveRoom,
    }),
    [setRooms, setRoom, createRoom, findRoom, leaveRoom]
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
