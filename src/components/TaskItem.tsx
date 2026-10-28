import { Link } from 'react-router-dom'
import type { Task } from '../types'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li
      style={{
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? '#999' : 'inherit',
      }}
    >
      <Link to={`/tasks/${task.id}`} style={{ color: 'inherit' }}>
        {task.title}
      </Link>
    </li>
  )
}
