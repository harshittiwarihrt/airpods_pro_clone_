import './App.css';
import Hero from './components/hero/Hero'
import AirPodsSize from './components/airpodsSIze/AirPodsSize'
import Navbar from './components/navbar/Navbar';
import H2Chip from './components/h2chip/H2Chip';
import Properties from './components/properties/Properties';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Hero/>
      <AirPodsSize/>
      <H2Chip/>
      <Properties/>
    </div>
  );
}

export default App;
