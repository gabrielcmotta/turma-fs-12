import Cabecalho from "../../components/Cabecalho";
import Form from "../../components/Form";
import Tabela from "../../components/Tabela";

function Usuarios() {
  return (
    <div className="container">
      <Cabecalho titulo="Cadastro de usuários" />
      <Tabela />
      <Form />
    </div>
  );
}

export default Usuarios;
