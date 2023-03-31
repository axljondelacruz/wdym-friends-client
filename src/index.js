import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { SocketContextProvider } from './context/SocketContext';
import { GameRoomContextProvider } from './context/GameRoomContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <SocketContextProvider>
      <GameRoomContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </GameRoomContextProvider>
    </SocketContextProvider>
  </BrowserRouter>
);
