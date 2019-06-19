import React from "react";
import styled from "styled-components";

import "./styles.css";
import SEO from "../components/seo";

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to top,
    rgba(1, 50, 31, 1) 15%,
    rgb(255, 255, 255, 0.1) 100%
  );
`;

const Name = styled.div`
  text-align: center;
  color: #fff;
  margin: auto;
`;

const Navigation = styled.div``;

const Item = styled.div``;

const SocialItem = styled.div``;

const IndexPage = () => (
  <HomeWrap>
    <SEO title="MacyMa Blog" />
    <Name>Macy Ma</Name>
    <Navigation></Navigation>
  </HomeWrap>
);

export default IndexPage;
