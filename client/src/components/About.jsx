import { TitleContainer, TitleLine, DivP } from "../styles/home";
import { useState, useEffect } from "react";
import proyect from '../assets/pexels-pixabay-414584.jpg';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = proyect;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <TitleContainer>
      <h2>Welcome to Our Culinary Haven!</h2>
      <h3>Discover, Create, and Indulge in Delicious Recipes Tailored to Your Diet Needs</h3>
      <TitleLine />
      <DivP>
        {imageLoaded ? (
          <img src={proyect} alt="project" />
        ) : (
          <div>Loading image...</div>
        )}
        <p>
          Welcome to our project! We are building a website where you can search for recipes along with their dietary properties. Our platform allows you to explore a wide range of recipes tailored to various diets. Whether you follow a vegan, gluten-free, or low-carb diet, you'll find delicious options to suit your needs.
          We're using a modern tech stack to power our platform. The frontend is built with React and styled-components, providing a sleek and intuitive user interface. On the backend, we have an Express server handling API requests and managing the database. We utilize SQL for efficient data storage and retrieval. With the help of Node.js and npm, we've created a robust and scalable application.
        </p>
      </DivP>
    </TitleContainer>
  );
};

export default About;
