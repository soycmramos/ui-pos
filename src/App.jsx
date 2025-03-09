import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Customers from './pages/Customers'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
      </Routes>
    </MainLayout>
  )
}
