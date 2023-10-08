import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #6a6c3c;
  &.active {
   opacity: 0.85;
  }
`;
