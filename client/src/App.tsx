import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import Browser from './pages/Browser';
import Blog from './pages/Blog';
import Video from './pages/Video';
import Problem from './pages/Problem';
import Social from './pages/Social';




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} >
          <Route path='/browser' element={<Browser/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/social' element={<Social/>} />
          <Route path='/video' element={<Video/>} />
          <Route path='/problem' element={<Problem/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
