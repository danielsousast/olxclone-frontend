import styled from 'styled-components';

export const Search = styled.div`
    background-color: #ddd;
    border-bottom: #ccc;
    padding: 20px 0;


    .search-box {
        background-color: #9bb83c;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;
    }

    .search-box form {
        background-color: #9bb83c;
        flex: 1;
        display: flex;
    }

    .search-box input, select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        color:#000;
        margin-right: 20px;
        font-size: 15px;
    }

    .search-box input {
        border:0;
        padding: 0 12px;
        border-radius: 5px;
        flex: 1;
    }

    .search-box button {
        background-color: #49aeef;
        font-size: 15px;
        color: #fff;
        height: 40px;
        cursor: pointer;
        border: 0;
        padding: 0 12px;
        border-radius: 5px;
    }

    .category-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        align-items: center;
        justify-content: center;
    }

    .category-item {
        display: flex;
        width: 25%;
        height: 50px;
        align-items: center;
        color: #000;
        text-decoration: none;
        margin-bottom:10px;
    }

    .category-item:hover {
        color: #999;
    }

    .category-list img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
    }

    @media(max-width:600px){
        .search-box form{
            flex-direction: column;
        }

        .search-box input{
            padding: 10px;
            margin-right: 0;
            margin-bottom: 10px;
        }

        .search-box select {
            width: 100%;
            margin-bottom: 10px;
        }

        .category-item {
            width: 50%;
            padding: 10px;
        }
    }
`;

export const Content = styled.div`
  h2 {
      font-size: 20px;
  }
  .ad-item {
        width: 25%;
    }

  .ad-list {
      display: flex;
      flex-wrap: wrap;
  }

  .see-all-link {
      color: #000;
      text-decoration: none;
      display: inline-block;
      margin-top: 10px;
  }

  .see-all-link:hover {
      color: #999;
  }

  @media(max-width:600px){
      .ad-item{
        width:50%;
      }

      .more {
          margin-top: 20px;
      }
  }
`;
