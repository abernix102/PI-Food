import styled, { keyframes } from 'styled-components';
import fondo from '../assets/2.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//section-home: 

export const SectionHome = styled.section`
  display: flex;
  background-image: url(${fondo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const ContainerTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  color: #fff;
  width: 100%;
  transform: translateY(-50%);
  animation: ${fadeIn} 1s ease-in-out;

  h1 {
    font-size: 30px;
  }
  img{
    width: 90%;
  }
  @media (min-width: 768px) {
    img{
        width: 30%;
    }
  }
`;
export const ButtonHome = styled.button`
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #e8e8e8;
  z-index: 1;
  background: #212121;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #e8e8e8;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(255, 255, 255, 0.27);
    transition: all 250ms;
  }

  &:hover {
    color: #212121;

    &:before {
      width: 100%;
    }
  }
`;
const scrollAnimation = keyframes`
  0% {
    transform: translateY(40%);
  }

  50% {
    transform: translateY(90%);
  }
`;
export const ButtonBtn = styled.button`
  width: 30px;
  top: 525px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: 2px solid #FF5722;
  position: absolute;
  
  &:after {
    content: '';
    position: absolute;
    top: 140%;
    color: whitesmoke;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;
export const ScrollIndicator = styled.div`
  width: 5px;
  height: 10px;
  border-radius: 10px;
  background-color: #FF5722;
  animation: ${scrollAnimation} 2s linear infinite;
  transform: translateY(40%);
`;

//section-about

export const TitleContainer = styled.div `
text-align: center;
margin: 0 auto;
padding: 25px;
h2{
    font-size: 30px;
    margin: 0;
    padding-bottom: 10px;
}
h3{
    font-size: 20px;
    color: #87848b;
    margin: 0;
    padding-bottom: 10px;
}
@media (min-width: 768px){
    width: 80%;
}
`
export const TitleLine = styled.div`
  content: "";
  display: block;
  position: relative;
  height: 3px;
  width: 113px;
  background-color: #f9c56a;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DivP = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  img {
    display: none;
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
  p {
    flex: 1;
    font-family: josefin sans, sans-serif;
    color: #828281;
    font-size: 20px;
    text-align: left;
  }
  
  @media (min-width: 768px) {
    padding: 50px;
    p{
        padding: 0;
        margin: 0;
    }
    img {
        display: inline-block;
      max-width: 400px;
    }
  }
`;