import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import UserLayout from './layouts/UserLayout/UserLayout';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/' element={<div>StipePage</div>} />
          <Route path='home' element={<div>HomePage</div>} />
          <Route path='newpost' element={<div>NewPost</div>} />
        </Route>

        <Route path='login' element={<LoginPage />} />
        <Route path='registration' element={<RegistrationPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
