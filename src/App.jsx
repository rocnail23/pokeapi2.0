import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from "./pages/HomePages"
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeapiPages from './pages/PokeapiPages'
import Nav from './shares/Nav'
import PokemonPages from './pages/PokemonPages'
import Loading from './components/Loading'


function App() {
 
  return (
    <div className='App'>
      <Nav/>
     <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/pokeapi'element={<PokeapiPages/>}/>
        
        <Route path='/pokemon/:id' element={<PokemonPages/>}/>
        
        </Route>
     </Routes>
    </div>
  )
}

export default App
