import React from 'react';
import  {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from 'styled-components'
import { ButtonContainer } from './Button';

export default function Navbar() {

        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
        <img src={logo} width ='45px'  alt='store' className='navbar-brand' />
        </Link> 
        <ul className='navbar-nav align-items-center'>
      <li className='nav-items ml-5'>
    <Link to='/' className='nav-link'>
 <h1> Vee's Phone Store </h1>
    </Link>
      </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
            <ButtonContainer>
               <span className='mr-2'>
               <i className='fas fa-cart-plus'></i>   
              </span> 
                My Cart
            </ButtonContainer>
        </Link>
            </NavWrapper>
        );
    
    }

 const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite)!important;
    font-size:1.9rems;
    text-transform: capitalize;
  }
 `