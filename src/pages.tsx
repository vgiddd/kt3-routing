import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate, useParams, type Location } from 'react-router-dom'
import { useAuth } from './auth'
import { tasks } from './data'
import { TaskBoard } from './components/TaskBoard'

export function HomePage() {
  return (
    <>
      <h1>Главная</h1>
      <p>Учебное приложение TaskBoard с клиентской маршрутизацией.</p>
      <p>
        Перейти к <Link to="/tasks">списку задач</Link>.
      </p>
    </>
  )
}

export function TasksPage() {
  return (
    <>
      <h1>Задачи</h1>
      <TaskBoard tasks={tasks} />
    </>
  )
}

// Динамический маршрут /tasks/:id
type TaskParams = { id: string }

export function TaskDetailsPage() {
  const { id } = useParams<TaskParams>()
  const task = tasks.find((t) => t.id === Number(id))

  if (!task) {
    return (
      <>
        <h1>Задача не найдена</h1>
        <p>Задачи с id {id} нет.</p>
        <Link to="/tasks">← К списку задач</Link>
      </>
    )
  }

  return (
    <>
      <h1>Задача #{task.id}</h1>
      <p>{task.title}</p>
      <p>Статус: {task.isCompleted ? 'выполнена' : 'в работе'}</p>
      <Link to="/tasks">← К списку задач</Link>
    </>
  )
}

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')

  // Страница, с которой PrivateRoute перенаправил на вход
  const from = (location.state as { from?: Location } | null)?.from?.pathname ?? '/'

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    login(name.trim())
    navigate(from, { replace: true })
  }

  return (
    <>
      <h1>Вход</h1>
      {from !== '/' && <p>Чтобы открыть {from}, войдите.</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          aria-label="Имя"
        />{' '}
        <button type="submit">Войти</button>
      </form>
    </>
  )
}

export function ProfilePage() {
  const { user, logout } = useAuth()
  return (
    <>
      <h1>Профиль</h1>
      <p>Вы вошли как {user}. Эта страница доступна только после входа.</p>
      <button onClick={logout}>Выйти</button>
    </>
  )
}

export function NotFoundPage() {
  return (
    <>
      <h1>404 — страница не найдена</h1>
      <Link to="/">На главную</Link>
    </>
  )
}
