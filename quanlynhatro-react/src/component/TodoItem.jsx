import { Container, Row, Col } from "react-bootstrap";
import { TodoContext } from "./Todo";
import styled, {css} from "styled-components";

const Button = styled.button`
  background-color: #f9f9f9;
  padding: 5px 15px;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      backround-color: #d97a7a;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #564354;
    `}
`;
export default (props) => {
  return (
    <li>
      {props.todo.title}
      <TodoContext.Consumer>
        {(deleteTodo) => {
          return (
            <>
              <Button primary onClick={() => deleteTodo(props.todo.id)}>
                Delete 1
              </Button>
              <Button secondary onClick={() => deleteTodo(props.todo.id)}>
                Delete 2
              </Button>
            </>
          );
        }}
      </TodoContext.Consumer>
    </li>
  );
};
