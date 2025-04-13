import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
  );
}

export default App;
