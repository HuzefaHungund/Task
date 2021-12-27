import logo from './logo.svg';
import './App.css';
import { MoviesMain } from './MoviesMain';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { WatchList } from './WatchList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<MoviesMain/>}/>
      <Route path="/watch" element={<WatchList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
