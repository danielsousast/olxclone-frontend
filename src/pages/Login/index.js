import React, { useState } from "react";
import { Title, Wraper, ErrorMessage } from "../../components/Styled";
import { Content } from "./styles";
import {login} from "../../helpers/olxApi";
import { signIn } from "../../helpers/authHandler";
import { useHistory } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault();
    
    setDisabled(true);
    const response = await login(email, password);
    console.log(response)
    

    if (response.data.error) {
      setError(response.data.error);
   
    } else {
      signIn(response.data.token, remember);
      history.push("/");
    }

    setDisabled(false)
  }

  return (
    <Wraper>
      <div className="container">
        <Title>Login</Title>

        <Content>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
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

            <label htmlFor="remember" className="label-form">
              <div className="title-box">Lembrar senha</div>
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  className="checkbox"
                  disabled={disabled}
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
              </div>
            </label>

            <label className="label-form">
              <div className="title-box"></div>
              <div className="input-box">
                <button type="submit" disabled={disabled}>Fazer Login</button>
              </div>
            </label>
          </form>
        </Content>
      </div>
    </Wraper>
  );
};

export default Login;
