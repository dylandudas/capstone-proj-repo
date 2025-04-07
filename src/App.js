import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className='grid'>
      <Header/>
      <Main/>
      <Highlights/>
      <Footer/>
    </div>
  );
}

export default App;
