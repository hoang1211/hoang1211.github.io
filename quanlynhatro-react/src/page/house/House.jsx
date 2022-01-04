import { Col, Row, Container } from "react-bootstrap";
import style from "style-component";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import HouseItem from "./HouseItem";
import { db } from "../../firebase-config";

const House = () => {
  const [r202, setR202] = useState([]);
  const [r301, setR301] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "phongchothue/" + "P202");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setR202(data);
    });
  }, []);
  console.log(r202);

  return (
    <Container>
      <h1>Danh sach phong</h1>
      <ul>
        <li>
          <div>
            <h1>P202</h1>
            <Container>
              {/* {r202.map((i, index) => {
                return (
                  <HouseItem
                    key={index}
                    stt={index}
                    thang={i.thang}
                    diensodau={i.diensodau}
                    diensocuoi={i.diensocuoi}
                    nuocsodau={i.nuocsodau}
                    nuocsocuoi={i.nuocsocuoi}
                    wifi={i.wifi}
                    vesinh={i.vesinh}
                    thangmay={i.thangmay}
                    tienphong={i.tienphong}
                    tienhotro={i.tienhotro}
                    maygiat={i.maygiat}
                  />
                );
              })} */}
            </Container>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default House;
