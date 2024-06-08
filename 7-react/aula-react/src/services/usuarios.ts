import api from "../utils/api";

const usuariosService = {
  listarUsuarios: async () => {
    const response = await api.get("usuarios");

    return response.data;
  },
};

export default usuariosService;
