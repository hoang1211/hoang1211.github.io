import { Table, Container, Row, Col } from "react-bootstrap";
import "./Style.css";

const HouseItem = (props) => {
  const soDien = props.diensocuoi - props.diensodau;
  const soNuoc = props.nuocsocuoi - props.nuocsodau;
  const tong =
    soNuoc * 25000 +
    soDien * 3200 +
    Number(props.wifi) +
    Number(props.vesinh) +
    Number(props.maygiat) +
    Number(props.thangmay) +
    Number(props.tienphong) -
    Number(props.tienhotro);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Row>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tháng</th>
                    <th>Điện số đầu</th>
                    <th>Điện số cuối</th>
                    <th>Số điện</th>
                    <th>Thành Tiền</th>
                    <th>Nước số đầu</th>
                    <th>Nước số cuối</th>
                    <th>Số nước</th>
                    <th>Thành Tiền</th>
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
                    <td>{soDien * 3200}</td>
                    <td>{props.nuocsodau}</td>
                    <td>{props.nuocsocuoi}</td>
                    <td>{soNuoc}</td>
                    <td>{soNuoc * 25000}</td>
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default HouseItem;
