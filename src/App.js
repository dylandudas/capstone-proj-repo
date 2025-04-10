import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Reservations from './pages/Reservations';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/reservations" element={<Reservations/>} />
      </Routes>
  );
}

export default App;
