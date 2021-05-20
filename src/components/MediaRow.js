import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pushCurrentMedia } from "../features/mediaSlice";
import { useHistory } from "react-router-dom";

const MediaRow = ({ title, mediaArray }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMedia = (clicked_media) => {
    console.log(clicked_media);
    dispatch(
      pushCurrentMedia({
        id: clicked_media.id,
        name:
          clicked_media.original_name ||
          clicked_media.name ||
          clicked_media.title,
        year: clicked_media.first_air_date || clicked_media.release_date,
        picture: clicked_media.poster_path,
        description: clicked_media.overview,
      })
    );

    history.push("/details/" + clicked_media.id);
  };

  return (
    <Row>
      <Title>{title}</Title>
      <MediaContainer>
        {mediaArray.map((item, index) => (
          <Media key={index} onClick={() => handleMedia(item)}>
            <Picture
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            />
          </Media>
        ))}
      </MediaContainer>
    </Row>
  );
};

export default MediaRow;

const Row = styled.div`
  position: relative;
  width: 100%;
  padding: 0 60px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const MediaContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  min-height: 130px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  margin-right: 20px;
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: 12px 14px 28px rgba(0, 0, 0, 0.3),
      0 10px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
