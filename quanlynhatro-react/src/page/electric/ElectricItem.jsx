import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { update, child, ref, set, remove } from "firebase/database";

const ElectricItem = (props) => {
  const handlerDelAll = () => {
    console.log(props.index);
    remove(ref(db, "phongchothue/" + props.room + "/" + props.index))
      .then(() => {
        alert("Xóa tháng thành công");
      })
      .catch((err) => {
        alert("Xóa số điện thất bại");
      });
  };
  const handlerDel = () => {
    console.log(props.index);
    update(ref(db, "phongchothue/" + props.room + "/" + props.index), {
      diensodau: 0,
      diensocuoi: 0,
    })
      .then(() => {
        alert("Xóa số điện thành công");
      })
      .catch((err) => {
        alert("Xóa số điện thất bại");
      });
  };

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.thang}</td>
      <td>{props.diensodau}</td>
      <td>{props.diensocuoi}</td>
      <td>{props.diensocuoi - props.diensodau}</td>
      <th>{Number(props.diensocuoi - props.diensodau) * 3200}</th>
      <td>
        <Button onClick={handlerDel}>Xóa số điện</Button>
      </td>
      <td>
        <Button onClick={handlerDelAll}>Xóa cả tháng</Button>
      </td>
    </tr>
  );
};

export default ElectricItem;
