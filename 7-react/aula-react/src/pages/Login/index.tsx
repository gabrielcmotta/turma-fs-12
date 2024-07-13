import { Card } from "react-bootstrap";
import * as yup from "yup";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("O campo deve ser um email válido")
    .required("O campo é requerido")
    .trim(),
  senha: yup.string().required("O campo é requerido").trim(),
});

type FormData = {
  email: string;
  senha: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const fazerLogin = async function (data: FormData) {
    alert("Login realizado com sucesso");
    console.log(data);
  };

  return (
    <div className="container-fluid bg-secondary-subtle">
      <div className="row d-flex justify-content-center align-items-center container-login">
        <div className="col-6">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                <h3>Login</h3>
              </Card.Title>
              <Card.Text className="text-center">
                Entre com suas credenciais
              </Card.Text>
              <form onSubmit={handleSubmit(fazerLogin)}>
                <div className="form-floating mb-3">
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    {...register("senha")}
                    type="password"
                    className="form-control"
                    id="senha"
                    placeholder="Senha"
                  />
                  <label htmlFor="senha" className="form-label">
                    Senha
                  </label>
                </div>
                <div className="container-fluid d-block">
                  <div className="row">
                    <button type="submit" className="btn btn-primary">
                      Entrar
                    </button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
