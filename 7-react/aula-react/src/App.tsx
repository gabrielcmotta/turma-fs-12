import { useState } from "react";
import Private from "./routes/Private";
import Public from "./routes/Public";

const App = () => {
  const [autenticado, setAutenticado] = useState(true);

  return <>{autenticado ? <Private /> : <Public />}</>;
};

export default App;
