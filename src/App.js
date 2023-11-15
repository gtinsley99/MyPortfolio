import './App.css';
import Navbar from './components/navbar/Navbar';
import Detail from './components/detail/Detail';
import AboutMe from './components/aboutme/AboutMe';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Detail />
        <AboutMe />
        {/* <Techs />
        <Projects /> */}
    </div>
  );
}

export default App;
