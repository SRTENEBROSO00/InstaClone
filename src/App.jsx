import './App.css'

import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabBar from './components/tabNav/TabBar'
import { Perfil } from './pages/Perfil/Perfil'


function App() {
  const Profile = () => {
    return (
      <Perfil/>
    )
  }
  return (
    <>
      <div className="screen">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />

        </Routes>
        <TabBar />
      </div>
    </>
  )

  }


export default App
