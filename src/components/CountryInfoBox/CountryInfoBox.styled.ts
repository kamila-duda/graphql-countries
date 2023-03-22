import { mediaQueries } from "@/shared/breakpoints";
import styled, { css } from "styled-components";

export const BoxWrapper = styled.div`
  border-left: 4px solid #1315d4;
  font-size: 30px;
  margin-top: 50px;
  padding: 16px 0 0;
`;

export const BoxList = styled.ul<{ secondVariant?: boolean }>(
  ({ secondVariant }) => css`
    display: grid;
    font-size: 30px;
    list-style: none;

    ${secondVariant &&
    css`
      font-size: 20px;
      list-style: disc;
      padding: 20px;
    `}

    ${mediaQueries.sm} {
      padding: 0 20px;
    }
  `
);

export const BoxItem = styled.li`
  font-size: 20px;
  margin: 10px 20px;
`;

export const BoxItemInfo = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CountryCode = styled.span`
  border: 1px solid blue;
  border-radius: 50%;
`;
