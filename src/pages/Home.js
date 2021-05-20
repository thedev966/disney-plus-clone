import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featuring from "../components/Featuring";
import MediaRow from "../components/MediaRow";
import axios from "../axios";
import endpoints from "../endpoints";

const Home = () => {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  const fetchMediaData = async (endpoint, key) => {
    axios.get(endpoint).then((res) => {
      console.log(res.data.results);
      let arr = res.data.results;
      let data = arr.slice(0, 4);
      switch (key) {
        case "originals":
          setOriginals(data);
          break;
        case "trending":
          setTrending(data);
          break;
        default:
          return;
      }
    });
  };

  useEffect(() => {
    fetchMediaData(endpoints.netflix_originals, "originals");
    fetchMediaData(endpoints.trending, "trending");
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <ImageCarousel />
      <FeaturingContainer>
        <Featuring logo="/images/viewers-disney.png" />
        <Featuring logo="/images/viewers-pixar.png" />
        <Featuring logo="/images/viewers-marvel.png" />
        <Featuring logo="/images/viewers-starwars.png" />
        <Featuring logo="/images/viewers-national.png" />
      </FeaturingContainer>
      <MediaRow title="Originals" mediaArray={originals} />
      <MediaRow title="Trending" mediaArray={trending} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("/images/home-background.png") no-repeat;
  overflow-x: hidden;
  margin-top: 70px;
  padding-bottom: 7px;
`;

const FeaturingContainer = styled.div`
  display: flex;
  padding: 0 60px;
  padding-top: 40px;
  padding-bottom: 35px;
`;
