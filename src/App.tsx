import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>StipePage</div>} />
        <Route path='home' element={<div>HomePage</div>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='registration' element={<RegistrationPage/>} />
        <Route path='newpost' element={<div>NewPost</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
