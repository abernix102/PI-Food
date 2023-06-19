import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './views/Homepage';
import Navbar from './views/Navbar.jsx';
import Recipes from './views/Recipes';
import Create from './views/Create';
import Detail from './views/Detail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/create-recipes' element={<Create/>} />
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
