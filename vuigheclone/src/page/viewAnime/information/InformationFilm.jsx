import { Container, Row, Col } from "react-bootstrap";
import "./information.css";
import { BsHeartHalf } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { useState } from "react";

const InformationFilm = (props) => {
  const [countLike, setCountLike] = useState(props.like);
  const [countFollow, setCountFollow] = useState(props.follow);
  const [cLike, setCLike] = useState(0);
  const [cFollow, setCFollow] = useState(0);
  const handleLike = () => {
    if (cLike < countLike) {
      setCLike(countLike + 1);
      setCountLike(countLike + 1);
    } else {
      setCLike(0);
      setCountLike(countLike - 1);
    }
  };
  const handleFollow = () => {
    if (cFollow < countFollow) {
      setCFollow(countFollow + 1);
      setCountFollow(countFollow + 1);
    } else {
      setCFollow(0);
      setCountFollow(countFollow - 1);
    }
  };

  return (
    <div className="film-detail">
      <Row>
        <Col sm={8} xs={12}>
          <div className="film-name">{props.name}</div>
          <div className="view">1234 lượt xem</div>
          <Row className="film-react">
            <Col sm={2} xs={4} className="pf-0">
              <div className="film-like" onClick={handleLike}>
                <BsHeartHalf className="film-react-icon" />
                Thích {countLike}
              </div>
            </Col>
            <Col xs={4} sm={2} className="pf-0">
              <div className="film-follow" onClick={handleFollow}>
                <AiOutlineBell className="film-react-icon" />
                Follow {countFollow}
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
