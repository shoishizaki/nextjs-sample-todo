import React from "react"
import { useAddTodo } from "../Hooks/useAddTodo"

export const TodoList: React.FC = () => {
  const { todo } = useAddTodo()

  return (
    <>
      <div>todoリスト</div>
      {todo && todo.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  )
}