import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSocketStateContext } from './SocketContext';

const GameRoomStateContext = createContext();
const GameRoomDispatchContext = createContext();

const GameRoomContextProvider = ({ children }) => {
  const { room } = useSocketStateContext();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!room) {
      return;
    }
  }, [room]);

  const value = useMemo(() => ({ players }), [players]);
  const actionValues = useMemo(() => ({ setPlayers }), [setPlayers]);

  return (
    <GameRoomStateContext.Provider value={value}>
      <GameRoomDispatchContext.Provider value={actionValues}>
        {children}
      </GameRoomDispatchContext.Provider>
    </GameRoomStateContext.Provider>
  );
};

const useGameRoomStateContext = () => useContext(GameRoomStateContext);
const useGameRoomDispatchContext = () => useContext(GameRoomDispatchContext);

export {
  GameRoomContextProvider,
  useGameRoomStateContext,
  useGameRoomDispatchContext,
};
