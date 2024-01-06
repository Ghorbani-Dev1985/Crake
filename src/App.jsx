
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/Pages/HomePage/HomePage'
import Login from './Components/Pages/Panel/Login'
import Panel from './Components/Pages/Panel/Panel'

function App() {


  return (
    <>
     <Toaster />
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/panel' element={<Panel />} />
      <Route element={<Layout />} >
        <Route path='/' element={<HomePage />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
