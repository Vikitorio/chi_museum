import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import UserLayout from './layouts/UserLayout/UserLayout';
import AuthorizationLayout from './layouts/AuthorizationLayout/AuthorizationLayout';
import StripePage from './pages/StripePage/StripePage';
import WrongRoutePage from './pages/WrongRoutePage/WrongRoutePage';
import ProtectedRoute from './router/ProtectedRoute/ProtectedRoute';
import NewPostPage from './pages/NewPost/NewPostPage';
import AuthRoute from './router/AuthRoute/AuthRoute';
import { CustomThemeProvider } from './providers/ThemeProvider/ThemeProvider';
function App() {

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path='/:page?' element={<StripePage />} />
            <Route element={<ProtectedRoute />} >
              <Route path='home' element={<StripePage myPosts />} />
              <Route path='new-post' element={<NewPostPage />} />
            </Route >
            <Route path='*' element={<WrongRoutePage />} />
          </Route >
          <Route element={<AuthRoute />}>
            <Route element={<AuthorizationLayout />}>
              <Route path='login' element={<LoginPage />} />
              <Route path='registration' element={<RegistrationPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </CustomThemeProvider>
  )
}

export default App
