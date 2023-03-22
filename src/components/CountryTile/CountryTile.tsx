import Link from "next/link";
import { CountryCode, CountryName, TileWrapper } from "./CountryTile.styled";

export interface CountryTileProps {
  country_name: string;
  country_code: string;
  country_url: string;
}

export const CountryTile = ({
  country_name,
  country_code,
  country_url,
}: CountryTileProps) => {
  return (
    <li>
      <Link href={country_url} passHref legacyBehavior>
        <TileWrapper>
          <CountryCode>{country_code}</CountryCode>
          <CountryName>{country_name}</CountryName>
        </TileWrapper>
      </Link>
    </li>
  );
};
