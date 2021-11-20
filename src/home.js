import hodLogo from "./hod_logo.png";
import "./App.css";

function App() {
  return (
    <header className="app-header">
      <img src={hodLogo} className="app-header__logo" alt="logo" />
      <h1 className="app-header__title">Coming Soon</h1>
    </header>
  );
}

export default App;
