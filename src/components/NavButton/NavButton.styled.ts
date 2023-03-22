import styled from "styled-components";

export const StyledLink = styled.a`
  transition: all 0.5s;

  &:hover {
    color: #383af6;
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
  width: 40px;
  z-index: 1;
`;
