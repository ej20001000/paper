
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import DigimonList from './pages/DigimonList';
import DigimonDetails from './pages/DigimonDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<DigimonList/>}/>
            <Route path="digimon">
              <Route path=":id" element={<DigimonDetails/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
