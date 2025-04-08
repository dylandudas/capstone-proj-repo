import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div className='grid'>
      <Header/>
      <Main/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
