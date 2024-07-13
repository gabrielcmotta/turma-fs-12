import Private from "./routes/Private";
import Public from "./routes/Public";
import { useUsuario } from "./contexts/UsuarioProvider";

const App = () => {
  const { authUser } = useUsuario();

  return <>{authUser ? <Private /> : <Public />}</>;
};

export default App;
