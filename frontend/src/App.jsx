import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Heading from './components/Heading';
import Home from './components/Home';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
