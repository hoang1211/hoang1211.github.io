import { Col, Row, Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { remove, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const HouseManagerItem = (props) => {
  const [nguoitungthue, setNguoitungthue] = useState({});
  useEffect(() => {
    const dataRef = ref(db, "nguoitungthue");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setNguoitungthue(data);
    });
  }, []);
  let l = 0;
  if (nguoitungthue === null) {
    l = 0;
  } else {
    l = nguoitungthue.length;
  }
  const handlerDelete = () => {
    set(ref(db, "nguoitungthue/" + l), {
      name: props.name,
      namsinh: props.namsinh,
      phone: props.phone,
      quequan: props.quequan,
      CCCD: props.cccd,
      nghenghiep: props.nghenghiep,
      bienxe: props.bienxe,
      room: props.room,
      ngayden: props.ngayden,
      ngaykyhopdong: props.ngaykyhopdong,
      ngayhethopdong: props.ngayhethopdong,
    })
      .then(() => {
        alert("Xóa người thuê thành công");
      })
      .catch((err) => {
        alert("Xóa người thuê thất bại");
      });
    remove(ref(db, "person/" + props.index));
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
      <td>{props.tiencoc}</td>
      <td>
        <Button onClick={handlerDelete}>Xóa</Button>
      </td>
    </tr>
  );
};

export default HouseManagerItem;
