import styled from "styled-components";
import fondo from '../assets/3.jpg'
export const FooterSection = styled.footer `
    width: 100%;
    background-image: url(${fondo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const FooterDiv = styled.div `
    display: flex;
    background: #1a1818a6;
    padding: 20px;
    align-items: center;
    justify-content: center;
`