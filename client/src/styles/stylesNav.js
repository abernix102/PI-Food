import styled, { keyframes} from 'styled-components';

const scaleUpVerticalTop = keyframes`
  0% {
    transform: scaleY(.0);
    transform-origin: center top;
  }
  100% {
    transform: scaleY(1);
    transform-origin: center top;
  }
`;
export const ContainerBar = styled.div`
  position: fixed;
  width: 100%;
  background: #18181894;
  z-index: 100;
  transition: background-color 0.9s ease;
`;
export const ContainerNavBar = styled.nav`
  display: flex;
  padding: 15px 0;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonIconBar = styled.button`
  width: 15%;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  border: none;
  background: none;
  align-items: center;
  img{
    width: 80%;
  }
  @media (min-width:768px){
    img{
      display: none;
    }
  }
`;
export const ButtonContainer = styled.button `
  width:20%;
  border: none;
  background: none;
  img{
    width:100%;
  }
  @media (min-width: 768px){
    img{
      width: 20%;
    }
  }
`
export const NavList = styled.ul`
  display: none;
  position: absolute;
  margin: 0;
  animation: ${scaleUpVerticalTop} 0.3s linear;

  a {
    color: #fff;
    text-decoration: none;
  }

  &.nav-visible {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 70px;
    padding: 20px;
    left: 0;
  }

  @media (min-width: 768px) {
    padding: 0;
    display: flex;
    position: initial;
    gap: 50px;

    &.nav-visible {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;