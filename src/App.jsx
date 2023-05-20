
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import List from './components/List'
import Login from './Components/login'



function App() {
 
  

  return (
   <>

      <Navbar></Navbar>
     
    <Routes>
       
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/list' element={<List></List>}></Route>


    </Routes>
   
   </>
  )
}

export default App
