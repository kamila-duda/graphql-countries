import { mediaQueries } from "@/shared/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 1180px;

  ${mediaQueries.lg} {
    width: 960px;
  }

  ${mediaQueries.md} {
    width: 720px;
  }

  ${mediaQueries.sm} {
    width: 540px;
  }

  ${mediaQueries.xs} {
    width: 100%;
  }
`;

export const CountriesWrapper = styled.ul`
  list-style: none;

  ${mediaQueries.sm} {
    padding: 0;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 60px;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);

  ${mediaQueries.sm} {
    display: grid;
  }
`;

export const HomeButton = styled.a`
  border-radius: 25px;
  border: 1px solid #383af6;
  font-size: 36px;
  padding: 30px 60px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover {
    background: #383af6;
  }
`;

export const BigFont = styled.p`
  font-size: 56px;
  transition: all 0.5s;

  &:hover {
    color: #383af6;
  }
`;
