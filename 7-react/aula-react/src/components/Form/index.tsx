import { useUsuario } from "../../contexts/UsuarioProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  nome: yup
    .string()
    .required("O campo é requerido")
    .min(3, "O nome deve conter pelo menos 3 caracteres")
    .max(20, "O nome deve conter no máximo 20 caracteres")
    .trim(),
  email: yup
    .string()
    .email("O campo deve ser um email válido")
    .required("O campo é requerido")
    .trim(),
});

type FormData = {
  nome: string;
  email: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { qtdUsuarios, salvarUsuario } = useUsuario();

  const enviarFormulario = async function (data: FormData) {
    await salvarUsuario(data);

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(enviarFormulario)}>
        <div className="row">
          <div className="col">
            <label className="form-label">Nome</label>
            <input
              {...register("nome")}
              placeholder="Nome Teste"
              className={
                errors?.nome?.message
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errors?.nome?.message && (
              <div className="invalid-feedback">{errors?.nome?.message}</div>
            )}
          </div>
          <div className="col">
            <label className="form-label">Email</label>
            <input
              placeholder="email@teste.com"
              {...register("email")}
              className={
                errors?.email?.message
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errors?.email?.message && (
              <div className="invalid-feedback">{errors?.email?.message}</div>
            )}
          </div>
          <div className="col d-flex align-items-end">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
          <div className="col d-flex align-items-end">
            <span>Qtd Usuários: {qtdUsuarios}</span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
