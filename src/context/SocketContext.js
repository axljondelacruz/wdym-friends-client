import { createContext, useContext, useMemo, useState } from 'react';

const SocketStateContext = createContext();
const SocketDispatchContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});

  const value = useMemo(
    () => ({
      room,
      rooms,
    }),
    [room, rooms]
  );

  const actionValues = useMemo(
    () => ({
      setRooms,
      setRoom,
    }),
    [setRooms, setRoom]
  );

  return (
    <SocketStateContext.Provider value={value}>
      <SocketDispatchContext.Provider value={actionValues}>
        {children}
      </SocketDispatchContext.Provider>
    </SocketStateContext.Provider>
  );
};

const useSocketStateContext = () => useContext(SocketStateContext);
const useSocketDispatchContext = () => useContext(SocketDispatchContext);

export {
  SocketContextProvider,
  useSocketStateContext,
  useSocketDispatchContext,
};
