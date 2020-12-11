import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
    
    render() {
    
        return (
        <React.Fragment>
  <div className='py-5'>
<div className='container'>
    <Title name="Vee's" title='products'/>
<div className='row'>
<ProductConsumer>
    {value => {
        return value.products.map(product => {
            return <Product key={product.id} product={product}/>
        })
    }}
</ProductConsumer>
</div>
<Link to='/vee' style={{display: 'flex',
  justifyContent: 'center'}}>

<ButtonContainer >
 For Vee only
  </ButtonContainer>
</Link>

</div>
  </div>
        </React.Fragment>    
        
        );
        }
    }