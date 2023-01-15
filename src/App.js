import Contato from "./components/Contato";
import Experiencia from "./components/Experiência";
import Início from "./components/Início";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfólio";
import Sobre from "./components/Sobre";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Início />
      <Sobre />
      <Portfolio />
      <Experiencia />
      <Contato />
      <SocialLinks />
    </div>
  );
}

export default App;
