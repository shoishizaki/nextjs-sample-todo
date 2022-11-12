import React from "react"
import { InputTodoForm } from "../components/InputTodoForm"
import { TodoList } from "../components/TodoList"

const Home: React.FC = () => {
  return <>
    <InputTodoForm />
    <TodoList />
  </>
}

export default Home