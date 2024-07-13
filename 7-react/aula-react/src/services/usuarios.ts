import api from "../utils/api";

const usuariosService = {
  listarUsuarios: async () => {
    const response = await api.get("usuarios");

    return response.data;
  },

  criarUsuario: async (usuario: Usuario) => {
    const response = await api.post("usuarios", {
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    });

    return response.data;
  },

  getUsuarioByEmail: async (email: string) => {
    const response = await api.get(`usuarios?email=${email}`);

    return response.data;
  },

  excluirUsuario: async (id: string | null) => {
    await api.delete(`usuarios/${id}`);

    return true;
  },
};

export default usuariosService;
