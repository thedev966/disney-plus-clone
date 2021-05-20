import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { selectMedia } from "../features/mediaSlice";

const Details = () => {
  const media = useSelector(selectMedia);
  const [background, setBackground] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    setBackground("https://image.tmdb.org/t/p/w500" + media.picture);
    let d = new Date(media.year);
    setInfo("Release date: " + d.getFullYear());
  }, [media]);

  return (
    <DetailsContainer>
      <Navbar />
      <MediaBackground background={background} />
      <MediaContent>
        <Title>{media.name}</Title>
        <Controls>
          <Play>
            <PlayIcon src="/images/play-icon-black.png" />
            Play
          </Play>
          <Trailer>
            <PlayIcon src="/images/play-icon-white.png" />
            Trailer
          </Trailer>
          <Add>
            <AddIcon>+</AddIcon>
          </Add>
          <Group>
            <GroupIcon src="/images/group-icon.png" />
          </Group>
        </Controls>
        <Info>{info}</Info>
        <Description>{media.description}</Description>
      </MediaContent>
    </DetailsContainer>
  );
};

export default Details;

const DetailsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const MediaBackground = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background});
  background-size: cover;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const MediaContent = styled.div`
  margin-top: 23vh;
  margin-left: 4vw;
  color: white;
`;

const Title = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4vh;
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 0;
  padding-top: 10px;
  font-size: 14px;
`;

const Description = styled.p`
  margin: 0;
  padding-top: 18px;
  max-width: 600px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.1px;
  line-height: 25px;
`;

const Play = styled.button`
  padding: 8px 18px;
  min-width: 90px;
  border-radius: 4px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  margin-right: 18px;
  transition: all 250ms ease;

  &:hover {
    box-shadow: 3px 7px 10px 1px rgba(249, 249, 249, 0.1);
    transform: scale(1.02);
  }
`;

const PlayIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const Trailer = styled(Play)`
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.2);
`;

const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 4px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 250ms ease;

  &:hover {
    box-shadow: 3px 10px 10px 1px rgba(249, 249, 249, 0.1);
  }
`;

const AddIcon = styled.div`
  font-size: 21px;
`;

const Group = styled(Add)`
  margin-left: 18px;
`;

const GroupIcon = styled.img`
  width: 28px;
  height: 28px;
`;
