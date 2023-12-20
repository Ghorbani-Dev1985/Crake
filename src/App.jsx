
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/Pages/HomePage/HomePage'

function App() {


  return (
    <>
     <Toaster />
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<HomePage />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
