import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { update, child, ref, set, remove } from "firebase/database";

const ElectricItem = (props) => {
  const handlerDelAll = () => {
    remove(ref(db, "phongchothue/" + props.room + "/" + props.index))
      .then(() => {
        alert("Xóa cả tháng thành công");
      })
      .catch((err) => {
        alert("Xóa dịch vụ thất bại");
      });
  };
  const handlerDel = () => {
    update(ref(db, "phongchothue/" + props.room + "/" + props.index), {
      maygiat: 0,
      tienhotro: 0,
      tienphong: 0,
    })
      .then(() => {
        alert("Xóa dịch vụ thành công");
      })
      .catch((err) => {
        alert("Xóa dịch vụ thất bại");
      });
  };

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.thang}</td>
      <td>{props.wifi}</td>
      <td>{props.vesinh}</td>
      <td>{props.maygiat}</td>
      <td>{props.thangmay}</td>
      <td>{props.tienhotro}</td>
      <td>{props.tienphong}</td>
      <td>
        <Button onClick={handlerDel}>Xóa dịch vụ</Button>
      </td>
      <td>
        <Button onClick={handlerDelAll}>Xóa cả tháng</Button>
      </td>
    </tr>
  );
};

export default ElectricItem;
