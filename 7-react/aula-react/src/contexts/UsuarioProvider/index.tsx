import { createContext, useContext, useEffect, useState } from "react";
import usuariosService from "../../services/usuarios";

type ChildrenProps = {
  children: React.ReactNode;
};

type UsuarioContextType = {
  qtdUsuarios: number;
  setQtdUsuarios: (qtdUsuarios: number) => void;
  usuarios: Array<Usuario>;
  setUsuarios: (usuarios: Array<Usuario>) => void;
  deletarUsuario: (id: string | null) => void;
  carregarUsuarios: () => void;
};

const UsuarioContext = createContext({} as UsuarioContextType);

const UsuarioProvider = ({ children }: ChildrenProps) => {
  const [qtdUsuarios, setQtdUsuarios] = useState(0);
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);

  const deletarUsuario = async (id: string | null) => {
    await usuariosService.excluirUsuario(id);

    setQtdUsuarios((prevState) => prevState - 1);
    carregarUsuarios();
  };

  const carregarUsuarios = async () => {
    const usuariosDaApi = await usuariosService.listarUsuarios();

    setUsuarios(usuariosDaApi);
    setQtdUsuarios(usuariosDaApi.length);
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const heranca: UsuarioContextType = {
    qtdUsuarios,
    setQtdUsuarios,
    deletarUsuario,
    carregarUsuarios,
    usuarios,
    setUsuarios,
  };

  return (
    <UsuarioContext.Provider value={heranca}>
      {children}
    </UsuarioContext.Provider>
  );
};

const useUsuario = () => {
  const context = useContext(UsuarioContext);

  if (!context) {
    throw new Error("useUsuario must be used within a UsuarioProvider");
  }

  return context;
};

export { UsuarioProvider, useUsuario };
