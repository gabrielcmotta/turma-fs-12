import { Nav, Navbar } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";
import { useUsuario } from "../../contexts/UsuarioProvider";

const Logout = () => {
  const { logout } = useUsuario();

  return (
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <li className="nav-item d-flex align-items-center">
          <a onClick={logout}>
            <BoxArrowRight size={20} className="me-2" /> Sair
          </a>
        </li>
      </Nav>
    </Navbar.Collapse>
  );
};

export default Logout;
