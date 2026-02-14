import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import UserLayout from './layouts/UserLayout/UserLayout';
import AuthorizationLayout from './layouts/AuthorizationLayout/AuthorizationLayout';
import StripePage from './pages/StripePage/StripePage';
import WrongRoutePage from './pages/WrongRoutePage/WrongRoutePage';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/:page?' element={<StripePage />} />
          <Route element={<ProtectedRoute />} >
            <Route path='home' element={<div>HomePage</div>} />
            <Route path='newpost' element={<div>NewPost</div>} />
          </Route >
          <Route path='*' element={<WrongRoutePage />} />
        </Route >
        <Route element={<AuthorizationLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
