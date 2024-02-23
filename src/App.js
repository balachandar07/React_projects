import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
// import Login from "./components/Login";
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
      <SocialLinks />
    
    </div>
  );
}

export default App;
