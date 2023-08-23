import GrandParent from "./components/GrandParent";
import "./App.css";

function App() {
  const lastName = "Soro";

  return (
    <div className="app-container">
      <div>
        <GrandParent lastName={lastName} />
      </div>
      <h1>App Container sending lastName Soro</h1>
    </div>
  );
}

export default App;
