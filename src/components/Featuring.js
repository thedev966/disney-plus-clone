import React from "react";
import styled from "styled-components";

const Featuring = ({ logo }) => {
  return (
    <FeaturingChannel>
      <ChannelLogo src={logo} />
    </FeaturingChannel>
  );
};

export default Featuring;

const FeaturingChannel = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-right: 17px;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const ChannelLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
