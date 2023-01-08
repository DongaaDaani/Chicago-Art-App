

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Pages/Navigation.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteList from './Components/Pages/Art/FavoriteList.tsx';
import Main from './Components/Pages/Main.tsx';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navigation />}>        
          <Route  path="art" element={<Main />} />
          <Route  path="favorite" element={<FavoriteList />} />
        </Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
