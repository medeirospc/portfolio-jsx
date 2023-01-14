import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Sobre from "./components/Sobre";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Sobre />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
