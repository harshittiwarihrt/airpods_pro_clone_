import './App.css';
import Hero from './components/hero/Hero'
import AirPodsSize from './components/airpodsSIze/AirPodsSize'
import Navbar from './components/navbar/Navbar';
import H2Chip from './components/h2chip/H2Chip';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AirPodsSize/>
      <H2Chip/>
    </div>
  );
}

export default App;
