import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
