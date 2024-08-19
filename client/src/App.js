
import './App.css';
import Create from './components/Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayProfile from './components/DisplayProfile';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Create />} /> 
        <Route path="/displayusers" element={<DisplayProfile />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
