import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import { isSigned, signOut } from "../../helpers/authHandler";

export default function Header() {
  const logged = isSigned();
  const history = useHistory();

  function handleLogout() {
    signOut();
    history.push('/')
  }

  return (
    <Container>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>

        <nav>
          <ul>

            {logged && (
              <>
                <li>
                  <Link to="account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link className="button" to="/newadd">
                    Poste um anúncio
                  </Link>
                </li>
              </>
            )}

            {!logged && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Cadastrar</Link>
                </li>
                <li>
                  <Link className="button" to="/login">
                    Poste um anúncio
                  </Link>
                </li>
              </>
            )}

          </ul>
        </nav>
      </div>
    </Container>
  );
}
