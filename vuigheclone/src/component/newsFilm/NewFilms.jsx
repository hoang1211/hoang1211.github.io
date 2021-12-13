import { Link } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import "./NewFilms.css";
export const NewFilms = (props) => {
  return (
    <div className="tray-item">
      <Link to={props.link}>
        <img className="tray-item-thumbnail" src={props.image} />
        <div className="tray-item-description">
          <div className="tray-item-title">{props.name}</div>
          <div className="tray-item-meta-info">
            <span className="tray-episode-name">{props.name}</span>
            <span className="tray-episode-views">12,456 lượt xem</span>
          </div>
        </div>
        <div className="tray-item-play-button">
          <BsPlay className="icon-play" />
        </div>
      </Link>
    </div>
  );
};
