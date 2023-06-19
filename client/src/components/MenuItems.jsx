import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
 position: absolute;
 padding: 13px;
 padding: 20px;
`;

const Nube = styled.div`
  padding: 0 5px;
  display: flex;
  border-radius:5px;
  align-items: center;
  color:#fff;
  background-color:#000;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: 91px;
    border: solid #000;
    border-width: 2px 2px 0 0;
    display: inline-block;
    padding: 3px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(-45deg);
    background-color: #000; /* Agrega el color de fondo deseado */
    border-radius: 2px; /* Ajusta el radio de las esquinas para que coincida con la forma de la flecha */
  }

  &.nav-visible::after {
    transform: translateY(-10%) rotate(45deg);
  }
`;



const MenuItems = ()=>{
    return(
        <Container>
            <Nube>
              <Link to='/create-recipes'>none</Link>
            </Nube> 
        </Container> 
    )
}

export default MenuItems;