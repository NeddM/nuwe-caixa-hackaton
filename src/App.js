import "./App.css";
import Grafico from "./Components/Grafico";
import Miniinfo from "./Components/Miniinfo";
import Navegador from "./Components/Navegador";
import Slider from "./Components/Slider";
import Toplogo from "./Components/Toplogo";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Toplogo></Toplogo>
        <Miniinfo></Miniinfo>
        <Slider></Slider>
        <Grafico></Grafico>
        <Navegador></Navegador>
      </div>
    </div>
  );
}

export default App;
