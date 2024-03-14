import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Page/Home';
import OurBrands from './components/Page/OurBrands';
import Industries from './components/Page/Industries';
import Services from './components/Page/Services';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ourbrands' element={<OurBrands />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
