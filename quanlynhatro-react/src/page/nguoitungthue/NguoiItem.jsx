import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { remove, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const NguoiItem = (props) => {
  const handlerDelete = () => {
    remove(ref(db, "nguoitungthue/" + props.index))
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
      <td>{props.ngayhethopdong}</td>
      <td>
        <Button onClick={handlerDelete}>Xóa</Button>
      </td>
    </tr>
  );
};

export default NguoiItem;
