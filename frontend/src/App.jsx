import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Account from './pages/Account'
import Home from './pages/Home'

function App() {
  
  return (
    <>
     
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Account' element={<Account />} />

     </Routes>
     </BrowserRouter>
     
    </>
  )
}
export default App
