import { createContext, useContext, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type UsuarioContextType = {
  qtdUsuarios: number;
  setQtdUsuarios: (qtdUsuarios: number) => void;
};

const UsuarioContext = createContext({} as UsuarioContextType);

const UsuarioProvider = ({ children }: ChildrenProps) => {
  const [qtdUsuarios, setQtdUsuarios] = useState(0);

  const heranca: UsuarioContextType = {
    qtdUsuarios,
    setQtdUsuarios,
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
