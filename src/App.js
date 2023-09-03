import './App.css';
import Footer from './components/orandilanding/Footer';
import Landing from './components/orandilanding/Landing';
import Navbar from './components/orandilanding/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>LifeGivers Website</h1>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
