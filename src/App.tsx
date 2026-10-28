import { NavLink, Route, Routes } from 'react-router-dom'
import { PrivateRoute, useAuth } from './auth'
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  TaskDetailsPage,
  TasksPage,
} from './pages'

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 16,
  fontWeight: isActive ? 'bold' : 'normal',
})

export default function App() {
  const { user } = useAuth()

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <NavLink to="/" end style={linkStyle}>Главная</NavLink>
        <NavLink to="/tasks" style={linkStyle}>Задачи</NavLink>
        <NavLink to="/profile" style={linkStyle}>Профиль</NavLink>
        {!user && <NavLink to="/login" style={linkStyle}>Вход</NavLink>}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}
