import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }

   .leftSide {
       flex: 1;
       margin-right: 20px;
   }

   .box {
       display: flex;
   }

   .adImage {
        width: 320px;
        height:320px;
        margin-right:20px;
   }

   .each-slide img{
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height:320px;
   }

   .adInfo {
        flex: 1;
   }

   .adTitle {
       margin:0;
   
   }

   .adName {
    margin-top: 20px;
   
   }

   .adDescription {
    margin-top: 20px;
    padding-bottom: 20px;
   }

   .adDescription small {
       padding-top: 20px;
       
   }

    .padding {
        padding: 10px;
    }

    .padding-right {
        padding-right: 20px;
    }

    .rightSide {
        width: 250px;
    }

    .price span {
        color:blue;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }
    .contact-seller {
        background-color: blue;
        color: white;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .createdBy {
        flex-direction: column;
    }

    .createdBy small{
        display: block;
        color: #999;
        margin-top: 10px;
    }

    @media(max-width:600px){
        & {
            flex-direction: column;
        }

        .leftSide {
            margin: 0;
        }

        .leftSide .box{
            flex-direction: column;
            padding: 20px;
            width:320px;
            margin: auto;
        }

        .leftSide img {
            width: 280px;
            height: 280px;
            margin:0;
        }

        .rightSide {
            margin: auto;
            width: 320px;
            margin-top: 20px;
        }
        .rightSide box{
            width: 320px;
        }

        .adImage{
            justify-content: center;
            align-items: center;
        }

        .slide {
            width: 280px;
        }
    }

`;

export const Fake = styled.div`
    background-color: #ddd;
    height: ${props => props.height || 20}px;
`;

export const Bottom = styled.div`
    h2 {
        font-size: 20px;
    }

    .others-list {
        display: flex;
    }

    .AdItem {
        width: 25%;
    }


`;

export const Breadchumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0 5px;
        text-decoration: underline;
    }
`;