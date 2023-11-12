import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from './layout/Dashboard'
import Book from './pages/Book'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'book',
            element: <Book />,
          },
          {
            path: 'user',
            element: <User />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

export default router
