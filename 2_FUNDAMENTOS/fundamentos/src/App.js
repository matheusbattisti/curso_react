// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
// Style
import "./App.css";




function App() {
  return (
    <div className="App">
      <h1>Fundamentos REACT</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
