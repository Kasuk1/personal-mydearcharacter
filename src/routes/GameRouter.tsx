import { Navigate, Route, Routes } from 'react-router-dom';
import { Lobby } from 'views/Game/Lobby/Lobby';
import { Match } from 'views/Game/Match/Match';

export const GameRouter = () => {
  return (
    <Routes>
      <Route path='/lobby' element={<Lobby />} />
      <Route path='/:gameId' element={<Match />} />
      <Route path='/' element={<Navigate to='lobby' />} />
    </Routes>
  );
};
