import { Container, Row, Col } from "react-bootstrap";
import "./information.css";
import { BsHeartHalf } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";

const InformationFilm = (props) => {
  return (
    <div className="film-detail">
      <Row>
        <Col xs={8}>
          <div className="film-name">{props.name}</div>
          <div className="view">
            {Math.floor(Math.random() * 100000) + 10000} lượt xem
          </div>
          <Row className="film-react">
            <Col xs={2} className="pf-0">
              <div className="film-like">
                <BsHeartHalf className="film-react-icon" />
                Thích {props.like}
              </div>
            </Col>
            <Col xs={2} className="pf-0">
              <div className="film-follow">
                <AiOutlineBell className="film-react-icon" />
                Follow {props.follow}
              </div>
            </Col>
          </Row>
          <Row>
            <div className="film-type">
              Thể loại: Hành Động, Phiêu Lưu
              <br /> Nhóm sub: VuiGhe Sub
              <br /> Bộ sưu tập: Hôm nay xem gì, Anime mùa xuân 2021
              <br />
              <br />
              The World Ends with You là một game nhập vai hành động với các yếu
              tố giả tưởng đô thị được phát triển bởi Square Enix và Jupiter cho
              Nintendo DS. Lấy bối cảnh là khu mua sắm Shibuya hiện đại của
              Tokyo, The World Ends with You mang phong cách nghệ thuật đặc sắc
              lấy cảm hứng từ Shibuya và văn hóa giới trẻ.
              <br />
              <br />
              Subarashiki Kono Sekai The Animation Subarashiki Kono Sekai The
              Animation Vietsub Subarashiki Kono Sekai The Animation HD tập 1
              Subarashiki Kono Sekai The Animation tập mới nhất
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default InformationFilm;
