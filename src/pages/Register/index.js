/* eslint-disable no-unreachable */
import React, { useState, useEffect } from "react";
import { Title, Wraper, ErrorMessage } from "../../components/Styled";
import { Content } from "./styles";
import { register } from "../../helpers/olxApi";
import { signIn } from "../../helpers/authHandler";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

function Register() {
  const [name, setName] = useState();
  const [state, setState] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, SetConfirm] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [states, setStates] = useState([]);

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    setDisabled(true);
    setError('');

    if (password !== confirm) {
        setError('Senhas não conferem');
        setDisabled(false);
        return;
    }
       
    const response = await register({name, email, password, state});
    
    if (response.data.error) {
      setError(response.data.error);
    } else {
      signIn(response.data.token);
      history.push("/");
    }

    setDisabled(false);
  }

  useEffect(() => {
      async function loadStates() {
        const response = await api.get('/states');
        
        setStates(response.data.states);

        console.log(response.data.states)
      }

      loadStates();
  }, []);

  return (
    <Wraper>
      <div className="container">
        <Title>Cadastro</Title>

        <Content>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="label-form">
              <div className="title-box">Nome completo</div>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  disabled={disabled}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="state" className="label-form">
              <div className="title-box">Estado</div>
              <div className="input-box">
                <select value={state} required onSelect={(e) => setState(e)}>
                  <option></option>
                  {states && states.map(item => 
                      <option value={item.id}>{item.name}</option>
                  )}
                </select>
              </div>
            </label>

            <label htmlFor="email" className="label-form">
              <div className="title-box">E-mail</div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  disabled={disabled}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="password" className="label-form">
              <div className="title-box">Senha</div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  disabled={disabled}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="confirme" className="label-form">
              <div className="title-box">Confirmar senha</div>
              <div className="input-box">
                <input
                  type="password"
                  name="confirme"
                  disabled={disabled}
                  required
                  value={confirm}
                  onChange={(e) => SetConfirm(e.target.value)}
                />
              </div>
            </label>

            <label className="label-form">
              <div className="title-box"></div>
              <div className="input-box">
                <button type="submit" disabled={disabled}>
                  Fazer Login
                </button>
              </div>
            </label>
          </form>
        </Content>
      </div>
    </Wraper>
  );
}

export default Register;
