import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
