import styled from "styled-components";

export const Content = styled.div`
  form {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 3px;
    padding: 30px 10px;
    box-shadow: 0 0 3px #999;
  }

  .label-form {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 500px;
  }

  .title-box {
    width: 200px;
    text-align: right;
    padding-right: 20px;
    font-weight: bold;
    font-size: 14px;
  }

  .input-box {
    flex: 1;
    align-items: flex-start;
  }


  .input-box input {
    width: 100%;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: 0;
    padding: 5px 10px;
    transition: all ease .3s;
  }
  .input-box select {
    width: 100%;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: 0;
    padding: 5px 10px;
    transition: all ease .3s;
  }

  .checkbox {
    border: 1px solid #ccc;

  }

  .input-box input:focus {
      border: 1px solid #333;
      color: #333;
  } 

  form button {
      background-color: #0089ff;
      border: 0;
      border-radius: 4px;
      outline: 0;
      padding: 6px 12px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
  }
  
  form button:hover {
      background-color: #006fce;
  }

  @media(max-width:600px) {
    form .label-form{
      flex-direction: column;
    }

    form .title-box {
      width: 100%;
      text-align: left;
    }
    form .input-box {
      width: 100%;
      text-align: left;
      margin-top:10px;
    }



    form button {
      width: 100%;
      text-align: left;
      text-align: center;
      height: 40px;
    }
  }

`;
