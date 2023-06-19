import logo from '../assets/savorica (3) (1).png';
import { SectionHome, ContainerTitle, ButtonHome} from '../styles/home';
import { useState, useEffect} from 'react';
import Footer from '../components/Footer';
import About from '../components/About';
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <SectionHome>
        {isLoaded && (
          <ContainerTitle desktop>
            <img src={logo} alt="logo" />
            <h1>Where taste meets wellness</h1>
            <ButtonHome>Home</ButtonHome>
          </ContainerTitle>
          
        )}
      </SectionHome>
       <About/>
        <Footer/>
    </div>
  );
};

export default HomePage;
