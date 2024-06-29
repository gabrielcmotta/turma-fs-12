import { useUsuario } from "../../contexts/UsuarioProvider";

type CabecalhoProps = {
  titulo: string;
};

function Cabecalho(props: CabecalhoProps) {
  const usuarioContext = useUsuario();

  return (
    <div className="row text-center">
      <h1>{props.titulo}</h1>
      <h3>Quantidade de usuários atual: {usuarioContext.qtdUsuarios}</h3>
    </div>
  );
}

export default Cabecalho;
