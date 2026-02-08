Структура додатку:
scr\

components
  LoginForm
  RegisterForm
  Paginaton
  Post
  CommentStripe
  Comment
  ControlBar
  layouts

pages:
- StipePage( index, route: /) - Відображає всі пости
- HomePage - Відображе мої пости (Доступна лише якщо ви здійснили вхід*)
- LoginPage - Логин (Доступна лише якщо ви не здійснили вхід*)
- RegisterPage - Реєстрація нового користувача (Доступна лише якщо ви не здійснили вхід*)
- NewPost - Створити новий пост (Доступна лише якщо ви здійснили вхід*)

store
  store.ts
  slices
  userSlice.ts (Login/Register actions user Thunk)

api
  axiosInstance.ts - тут створюється instance axios та лежать інтерсептори (при 401, 403 - редірет на Login, Додає ключ до запитів на бєк, додає базову часть URL API)
  userActions.ts - тут лежать функції взаємодії з апі за допомогою axios, в них входить реєстрація та логін користувача
  exhibitActions.ts - тут лежать функції взаємодії з апі за допомогою axios, які обробляють дії з експонатами (створення, видалення, отримання всіх експонатів, отримання всіх своїх постів експонатів, отримання одного за id)
  commentActions.ts - дії з постами (додавання, видалення, просмотор)


App.tsx - Точка входу в додаток ( Містить роутер, роутер що мають обмеження за правами доступу не мають бути доступні *)



* - Це приклад як захистити роут

import { Navigate } from "react-router-dom";



function ProtectedRoute({ children, isAllowed }) {

    if (!isAllowed) { // Беремо це значення зі стори Redux

        return <Navigate to="/login" replace />;

    }



    return children;

}



import { Routes, Route } from "react-router-dom";



function App({ isAuthenticated }) {

    return (

        <Routes>

            <Route path="/login" element={<Login />} />

            <Route

                path="/protected"

                element={

                    <ProtectedRoute isAllowed={isAuthenticated}>

                        <ProtectedComponent />

                    </ProtectedRoute>

                }

            />

        </Routes>

    );

}



Як налаштувати интерсепторы
Один з варіантів
// src/navigate.js
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
================================================================
// src/axiosInstance.js
import axios from 'axios';
import { history } from './navigate';
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// Добавление interceptor для запросов

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

  },

  (error) => {

    return Promise.reject(error);

  }

);



// Добавление interceptor для ответов

axiosInstance.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response && error.response.status === 401) {

      // Удаляем токен

      localStorage.removeItem('token');

      // Редирект на страницу логина

      history.push('/login');

    }

    return Promise.reject(error);

  }

);