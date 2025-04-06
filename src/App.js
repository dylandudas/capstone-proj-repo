import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Highlights from './components/Highlights';

function App() {
  return (
    <div id="container">
      <Header/>
      <Main/>
      <Highlights/>
      <Footer/>
    </div>
  );
}

export default App;
