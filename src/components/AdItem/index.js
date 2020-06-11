import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function AdItem(props){
    let price = ''

    if(props.data.priceNegotiable) {
        price = 'Preço Negociável'
    } else {
        price = `R$ ${props.data.price}`
    }
  return (
    <Container className="ad-item">
        <Link to={`/ad/${props.data.id}`}>
            <div className="item-image">
                <img src={props.data.image} alt=""/>
            </div>
            <div className="item-name">{props.data.title}</div>
  <div className="item-price">{price}</div>
        </Link>
    </Container>
  );
}
