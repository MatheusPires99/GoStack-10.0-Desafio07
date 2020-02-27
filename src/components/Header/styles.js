import styled from "styled-components/native";

import logo from "../../assets/images/logo.svg";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  height: 85px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "cover",
})`
  width: 185px;
  height: 24px;
`;
