import "./App.css";
import HookUseEffect from "./components/HookUseEffect";
import HookUseReducer from "./components/HookUseReducer";
import HookUseState from "./components/HookUseState";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  );
}

export default App;
