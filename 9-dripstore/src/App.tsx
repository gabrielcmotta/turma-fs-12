import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
