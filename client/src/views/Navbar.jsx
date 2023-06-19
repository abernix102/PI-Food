import {ContainerNavBar, ButtonIconBar, NavList, ContainerBar, ButtonContainer } from '../styles/stylesNav'
import {Link} from 'react-router-dom'
import logoxd from '../assets/logo-little.png'
import { useState, useEffect} from 'react'
import iconNav from '../assets/menu.png'
import MenuItems from '../components/MenuItems'
import SearchNav from '../components/searchNav'


const Navbar = () => {
    const [sliderNav, setSliderNav] = useState(false);
    const [scrollBackground, setScrollBackground] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    const handleClick = ()=>{
        if(!sliderNav) setSliderNav(true)
        else setSliderNav(false)
    }
    
    useEffect(()=>{
      const handleScroll = () =>{
      const scrollPosition = window.scrollY;
      const shoulChangePosition = scrollPosition > 0;
      setScrollBackground(shoulChangePosition)
      }
      window.addEventListener('scroll', handleScroll);
      return()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    },[])
   
  return (
    <ContainerBar style={{ backgroundColor: scrollBackground ? '#0f0f10f5' : ''}}>
      <ContainerNavBar desktop>
        <ButtonContainer><img  src={logoxd} alt="logo" /></ButtonContainer>
        <ButtonIconBar onClick={handleClick}><img  src={iconNav} alt="menu-nav"/></ButtonIconBar>
        <NavList className={sliderNav ? 'nav-visible' : ''}>    
          <li><Link to='/' className='home'>Home</Link></li>
          <li  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{listStyle:'none'}}><Link to='/recipes' className='services'>
            recipes
            </Link>
            {isHovered ? <MenuItems/> : ''}
            </li>
            <SearchNav/>
        </NavList>
      </ContainerNavBar>
    </ContainerBar>
  )
}
export default Navbar