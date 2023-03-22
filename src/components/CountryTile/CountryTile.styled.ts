import { mediaQueries } from "@/shared/breakpoints";
import styled from "styled-components";

export const TileWrapper = styled.a`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 8px 32px;
  position: relative;
  transition: all 0.5s;
  width: max-content;
  z-index: 2;

  &::after {
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgb(82 136 245) 10%,
      rgba(252, 176, 69, 0) 100%
    );
    bottom: 0;
    content: "";
    height: 100%;
    position: absolute;
    transition: all 0.5s;
    width: 0;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  ${mediaQueries.sm} {
    padding: 8px 16px;
    width: 100%;
  }
`;

export const CountryName = styled.span`
  text-transform: uppercase;
  z-index: 1;
`;

export const CountryCode = styled.span`
  border-radius: 50%;
  color: #383af6;
  font-weight: bold;
  text-align: end;
  z-index: 1;
`;
