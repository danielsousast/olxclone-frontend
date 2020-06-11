import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  .content {
    display: flex;
    height: 60px;
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .logo-1,
  .logo-2,
  .logo-3 {
    font-size: 27px;
    font-weight: bold;
  }
  .logo-1 {
    color: red;
  }
  .logo-2 {
    color: blue;
  }

  .logo-3 {
    color: green;
  }

  nav {
    padding: 10px 0;
  }

  nav ul, li {
    list-style: none
  }

  ul {
    display: flex;
    align-items: center;
    height: 40px;
  }

  li {
    margin: 0 20px
  }

  li a, button {
    border: 0;
    background: none;
    color: #000;
    font-size: 14px;
    cursor: pointer;
    outline: 0;
  }

  li button:hover {
    color: #999;
  }

  li a:hover {
    color: #999;
  }

  li a.button {
    background-color: #ff8100;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }

  li a.button:hover {
    background-color: #e57706;
  }

  @media (max-width:600px) {
    & {
      height: auto;
    }

    .content {
      flex-direction: column;
      height: auto;
    }

    .logo {
      justify-content: center;
      margin: 20px 0;
    }
    nav ul {
      flex-direction: column;
      height: auto;
    }

    nav li {
      margin: 5px;
    }
  }
`;
