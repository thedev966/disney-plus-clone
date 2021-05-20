import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="disney-logo" />
      </Link>
      <LinksContainer>
        <IconContainer>
          <Icon src="/images/home-icon.svg" />
          Home
          <span></span>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/search-icon.svg" />
          Search
          <span></span>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/watchlist-icon.svg" />
          Watchlist
          <span></span>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/original-icon.svg" />
          Originals
          <span></span>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/movie-icon.svg" />
          Movies
          <span></span>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/series-icon.svg" />
          Series
          <span></span>
        </IconContainer>
      </LinksContainer>
      <AvatarContainer>
        <AvatarIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Theo_James_March_18%2C_2014_%28cropped%29.jpg/163px-Theo_James_March_18%2C_2014_%28cropped%29.jpg" />
      </AvatarContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: inherit;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Logo = styled.img`
  width: 75px;
  object-fit: contain;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.08px;
  text-transform: uppercase;
  width: inherit;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;
  position: relative;

  span {
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: white;
      position: absolute;
      left: 3px;
      bottom: -4px;
      opacity: 0;
      transform-origin: center center;
      transition: all 250ms ease;
      transform: scaleX(0);
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Icon = styled.img`
  width: 23px;
  height: 23px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 7px;
`;

const AvatarContainer = styled.div`
  position: absolute;
  right: 6vw;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const AvatarIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
