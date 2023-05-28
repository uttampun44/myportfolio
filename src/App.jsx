import './App.css'
import Home from "./Components/Home/Home"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Technologyblog from './Components/TechnologyBlog/Technologyblog'
import Reactblog from './Components/TechnologyBlog/Reactblog'


function App() {

  return (
   <BrowserRouter>
         <>
           <Routes>
               <Route exact path="/" element={<Home />}></Route>
               <Route exact path='/technologyblog' element={<Technologyblog />}></Route>
               <Route exact path='/reactblog' element={<Reactblog />}></Route>
           </Routes>
         </>
   </BrowserRouter>
  )
}

export default App
