import { Col, Row, Container, Table, Button } from "react-bootstrap";
import style from "style-component";

const ElectricItem = (props) => {
  return (
    <tr>
      <td>{props.thang}</td>
      <td>{props.diensodau}</td>
      <td>{props.diensocuoi}</td>
      <td>{props.diensocuoi - props.diensodau}</td>
    </tr>
  );
};

export default ElectricItem;
