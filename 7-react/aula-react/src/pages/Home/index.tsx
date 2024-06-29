import { useUsuario } from "../../contexts/UsuarioProvider";

export const Home = () => {
  const { qtdUsuarios } = useUsuario();
  return (
    <div>
      <h1>Bem-vindo</h1>
      <h4>Existem {qtdUsuarios} cadastrado(s) na base</h4>
    </div>
  );
};
