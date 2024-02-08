import './App.css';
import CityCall from './components/citycall/CityCall';
import Header from './components/header/Header'
import HeroCall from './components/herocall/HeroCall';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Download from './components/download/Download';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <HeroCall />
        <CityCall />
        <Blog />
        <About />
        <Download />
      </div>
    </div>
  );
}

export default App;
