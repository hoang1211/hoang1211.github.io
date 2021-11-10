import { useTitle } from "../hooks/useTitle";
import { Container, Row, Col } from "react-bootstrap";
import { createContext, useState } from "react";
import TodoList from "./TodoList";

const TodoContext = createContext({ todos: [] });
TodoContext.displayName = "TodoContext";
export { TodoContext };
export default () => {
  useTitle("Todo App");
  const [todos, setTodos] = useState([
    {
      id: 100,
      title: "React",
      status: false,
    },
  ]);
  const addTodo = () => console.log("Add new todo");
  const completeTodo = () => console.log("Comple todo");
  const deleteTodo = () => console.log("Delete todo");

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo, deleteTodo }}>
      <Container>
        <Row>
          <Col>
            <h1>Todo</h1>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </TodoContext.Provider>
  );
};
