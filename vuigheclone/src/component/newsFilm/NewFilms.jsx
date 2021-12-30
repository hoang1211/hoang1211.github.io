import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import "./NewFilms.css";
import { getData } from "../../slices/react.slices";
import store from "../../store/store";

const handleClick = () => {
  store.dispatch(getData());
};

export const NewFilms = (props) => {
  return (
    <div className="tray-item">
      <Link to={props.link} onClick={handleClick}>
        <img className="tray-item-thumbnail" src={props.image} />
        <div className="tray-item-description">
          <div className="tray-item-title">{props.name}</div>
          <div className="tray-item-meta-info">
            <span className="tray-episode-name">{props.name}</span>
            <span className="tray-episode-views">12,456 lượt xem</span>
          </div>
        </div>
        <div className="tray-item-play-button">
          <AiFillPlayCircle className="icon-play" />
        </div>
      </Link>
    </div>
  );
};
