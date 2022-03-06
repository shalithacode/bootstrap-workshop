import React from "react";
import { Card } from "react-bootstrap";
import "./CourseCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt, faVideo, faDownload} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function CourseCard(props) {
  const { title, description, image } = props;
  return (
    <>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={image} />
        <Card.Body className="card-body">
          <div className="card-price">$15</div>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-description">{description}</Card.Text>
          <div className="ratin-group">
            <div className="star-group">
              <FontAwesomeIcon className="star" icon={faStar} color="#FFD700" />
              <FontAwesomeIcon className="star" icon={faStar} color="#FFD700" />
              <FontAwesomeIcon className="star" icon={faStar} color="#FFD700" />
              <FontAwesomeIcon className="star" icon={faStar} color="#FFD700" />
              <FontAwesomeIcon
                className="star"
                icon={faStarHalfAlt}
                color="#FFD700"
              />
            </div>
            <div className="rating-count">4.8</div>
          </div>
          <div className="icon-section">
            <div className="icon-group">
              <FontAwesomeIcon
                className="icon"
                icon={faYoutube}
                color="#fff"
              />
              <div className="icon-text">Video</div>
            </div>
            <div className="icon-group">
              <FontAwesomeIcon
                className="icon"
                icon={faVideo}
                color="#fff"
              />
              <div className="icon-text">1k</div>
            </div>
            <div className="icon-group">
              <FontAwesomeIcon
                className="icon"
                icon={faDownload}
                color="#fff"
              />
              <div className="icon-text">0.2k</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CourseCard;