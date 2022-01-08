import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { remove, ref, set } from "firebase/database";

const HouseManagerItem = (props) => {
  const handlerDelAll = () => {
    remove(ref(db, "person/" + props.index))
      .then(() => {
        alert("Xóa người thuê thành công");
      })
      .catch((err) => {
        alert("Xóa người thuê thất bại");
      });
  };
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.room}</td>
      <td>{props.name}</td>
      <td>{props.namsinh}</td>
      <td>{props.phone}</td>
      <td>{props.quequan}</td>
      <td>{props.cccd}</td>
      <td>{props.nghenghiep}</td>
      <td>{props.bienxe}</td>
      <td>{props.ngayden}</td>
      <td>{props.ngaykyhopdong}</td>
      <td>{props.ngayhetdanhopdong}</td>
      <td>{props.tiencoc}</td>
      <td>
        <Button onClick={handlerDelAll}>Xóa</Button>
      </td>
    </tr>
  );
};

export default HouseManagerItem;
