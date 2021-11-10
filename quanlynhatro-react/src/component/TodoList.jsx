import { Container, Row, Col } from "react-bootstrap";
import { TodoContext } from "./Todo";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <TodoContext.Consumer>
            {(value) =>
              value.todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })
            }
          </TodoContext.Consumer>
        </Col>
      </Row>
    </Container>
  );
};
