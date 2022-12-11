import './App.css';
import Hero from './components/hero/Hero'
import AirPodsSize from './components/airpodsSIze/AirPodsSize'
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AirPodsSize/>
    </div>
  );
}

export default App;
