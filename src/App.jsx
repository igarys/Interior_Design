
import {Routes, Route } from 'react-router-dom';
import './App.css'
import { MainPage } from './components/MainPage/MainPage';
import {Connect} from './components/Connect/Connect'
function App() {


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path='connect' element={<Connect />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App
