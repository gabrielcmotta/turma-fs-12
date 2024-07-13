import { createContext, useContext, useEffect, useState } from "react";
import usuariosService from "../../services/usuarios";
import { useNavigate } from "react-router-dom";

type ChildrenProps = {
  children: React.ReactNode;
};

// MAPEAMENTO
type UsuarioContextType = {
  qtdUsuarios: number;
  setQtdUsuarios: (qtdUsuarios: number) => void;
  usuarios: Array<Usuario>;
  setUsuarios: (usuarios: Array<Usuario>) => void;
  deletarUsuario: (id: string | null) => void;
  carregarUsuarios: () => void;
  salvarUsuario: (usuario: Usuario) => void;
  authUser: Usuario | null;
  login: (email: string, senha: string) => void;
  logout: () => void;
};

const UsuarioContext = createContext({} as UsuarioContextType);
// MAPEAMENTO

// IMPLEMENTAÇÃO
const UsuarioProvider = ({ children }: ChildrenProps) => {
  const [qtdUsuarios, setQtdUsuarios] = useState(0);
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);
  const [authUser, setAuthUser] = useState<Usuario | null>(null);

  const navigate = useNavigate();

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

  const salvarUsuario = async (usuario: Usuario) => {
    const usuarioCriado = await usuariosService.criarUsuario(usuario);

    setUsuarios([...usuarios, usuarioCriado]);
    setQtdUsuarios(qtdUsuarios + 1);
  };

  const login = async (email: string, senha: string) => {
    const usuarios = await usuariosService.getUsuarioByEmail(email);

    if (usuarios.length === 0) {
      throw Error("Email ou senha inválido!");
    }

    if (usuarios[0].senha !== senha) {
      throw Error("Email ou senha inválido!");
    }

    setAuthUser(usuarios[0]);
    localStorage.setItem("auth-user", JSON.stringify(usuarios[0]));
    navigate("/");
  };

  const logout = async () => {
    setAuthUser(null);
    localStorage.removeItem("auth-user");
    navigate("/login");
  };

  useEffect(() => {
    if (authUser) {
      carregarUsuarios();
    }
  }, [authUser]);

  useEffect(() => {
    const authUser = localStorage.getItem("auth-user");

    if (authUser) {
      setAuthUser(JSON.parse(authUser));
    }
  }, []);

  const value: UsuarioContextType = {
    qtdUsuarios,
    setQtdUsuarios,
    deletarUsuario,
    carregarUsuarios,
    usuarios,
    setUsuarios,
    salvarUsuario,
    authUser,
    login,
    logout,
  };

  return (
    <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
  );
};
// IMPLEMENTAÇÃO

const useUsuario = () => {
  const context = useContext(UsuarioContext);

  if (!context) {
    throw new Error("useUsuario must be used within a UsuarioProvider");
  }

  return context;
};

export { UsuarioProvider, useUsuario };
