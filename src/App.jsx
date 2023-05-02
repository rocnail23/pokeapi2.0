import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/homePages'
import ProtectedRoutes from './pages/protectedRoutes'
import PokeapiPages from './pages/pokeapiPages'
import Nav from './shares/Nav'


function App() {
 
  return (
    <div className='App'>
      <Nav/>
     <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/pokeapi'element={<PokeapiPages/>}/>
        </Route>
     </Routes>
    </div>
  )
}

export default App
