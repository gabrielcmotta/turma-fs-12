import api from "../utils/api";

const usuariosService = {
  listarUsuarios: async () => {
    const response = await api.get("usuarios");

    return response.data;
  },

  criarUsuario: async (usuario: Usuario) => {
    const response = await api.post("usuarios", usuario);

    return response.data;
  },
};

export default usuariosService;
