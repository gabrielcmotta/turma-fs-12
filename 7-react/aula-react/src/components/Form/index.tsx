import { useState } from "react";
import { useUsuario } from "../../contexts/UsuarioProvider";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const { qtdUsuarios, salvarUsuario } = useUsuario();

  const enviarFormulario = async function () {
    const novoUsuario: Usuario = {
      nome,
      email,
    };

    salvarUsuario(novoUsuario);

    setNome("");
    setEmail("");
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <label className="form-label">Nome</label>
          <input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome Teste"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Email</label>
          <input
            placeholder="email@teste.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="col d-flex align-items-end">
          <button onClick={enviarFormulario} className="btn btn-primary">
            Salvar
          </button>
        </div>
        <div className="col d-flex align-items-end">
          <span>Qtd Usuários: {qtdUsuarios}</span>
        </div>
      </div>
    </>
  );
}

export default Form;
