import styled from 'styled-components';

export const Container = styled.div`
  a {
      display: block;
      border: 1px solid #fff;
      margin: 10px;
      text-decoration: none;
      padding: 10px;
      border-radius: 5px;
      color: #000;
      background-color: #fff;
      transition: all ease 0.2s;
  }

  a:hover {
      border: 1px solid #ccc;
      background-color: #fafafa
  }

  .item-image img {
      width: 100%;
      border-radius: 5px; 
  }

  .item-name  {
      font-weight: bold;
  }
`;
