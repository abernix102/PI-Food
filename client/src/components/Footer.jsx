import linkedin from '../assets/linkedin-svgrepo-com.png'
import {FooterSection, FooterDiv} from '../styles/footer'


const Footer = ()=>{
    return(
        <FooterSection>
            <FooterDiv>
                <a href="https://www.linkedin.com/in/nahuel-ordo%C3%B1ez-3ba21621b/">
                <img width={'50px'} src={linkedin} alt="" />
                </a>
            </FooterDiv>
        </FooterSection>
    )
}

export default Footer;