import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/landing/landing';
import News from './components/new_Stock/new_stock';
import Men from './components/men/men';
import Women from './components/wemen/wemen';
import Kids from './components/kids/kids';
import Contact from './components/contact/contact'


function App() {
    return (
      <div className="main">
        <Navbar />
        <Landing />
        <News/>
        <Men/>
        <Women/>
        <Kids/>
        <Contact />
        
        
      </div>
  )}

export default App;
