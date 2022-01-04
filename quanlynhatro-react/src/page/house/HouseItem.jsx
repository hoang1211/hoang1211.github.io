import { Table } from "react-bootstrap";

const HouseItem = (props) => {
  const soDien = props.diensocuoi - props.diensodau;
  const soNuoc = props.nuocsocuoi - props.nuocsodau;
  const tong =
    props.wifi +
    props.vesinh +
    props.maygiat +
    props.thangmay +
    props.tienphong +
    props.tienhotro;

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Tháng</th>
            <th>Điện số đầu</th>
            <th>Điện số cuối</th>
            <th>Số điện</th>
            <th>Nước số đầu</th>
            <th>Nước số cuối</th>
            <th>Số nước</th>
            <th>Wifi</th>
            <th>Vệ sinh</th>
            <th>Máy Giặt</th>
            <th>Thang Máy</th>
            <th>Tiền Phòng</th>
            <th>Tiền Hỗ Trợ</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.stt}</td>
            <td>{props.thang}</td>
            <td>{props.diensodau}</td>
            <td>{props.diensocuoi}</td>
            <td>{soDien}</td>
            <td>{props.nuocsodau}</td>
            <td>{props.nuocsocuoi}</td>
            <td>{soNuoc}</td>
            <td>{props.wifi}</td>
            <td>{props.vesinh}</td>
            <td>{props.maygiat}</td>
            <td>{props.thangmay}</td>
            <td>{props.tienphong}</td>
            <td>{props.tienhotro}</td>
            <td>{tong}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default HouseItem;
