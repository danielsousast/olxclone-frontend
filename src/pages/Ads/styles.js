import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  margin-top: 20px;

  .left-side {
    width: 250px;
    margin-right: 10px;
  }

  .filter-name {
    font-size: 15px;
    margin: 10px 0;
  }

  .left-side  input, select {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #9bb83c;
    outline: 0;
    font-size: 15px;
    padding: 10px;
  }

  .left-side  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .category-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color:#000;
      cursor: pointer;
  }

  .category-item:hover,
  .category-item.active {
      background-color: #9bb83c;
      color:#fff;
  }

  .category-item img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .category-item span {
    font-size: 14px;
  }

  .right-side {
    flex: 1;
  }

  .right-side h2 {
    font-size: 20px;
  }
  .ad-item {
        width: 33%;
    }

  .ad-list {
      display: flex;
      flex-wrap: wrap;
  }

  .right-side .warning{
    padding: 40px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  @media(max-width:600px) {
    & {
      flex-direction: column;
    }

    .left-side {
      width: auto;
      margin: 10px;
    }

    .ad-item {
      width: 50%;
    }
  }
  
`;
