import Cabecalho from "./components/Cabecalho";
import Tabela from "./components/Tabela";

function App() {
  return (
    <div className="container">
      <Cabecalho titulo="Cadastro de usuários" />
      <Tabela />
    </div>
  );
}

export default App;
