import {
  BoxWrapper,
  BoxItem,
  BoxList,
  BoxItemInfo,
} from "./CountryInfoBox.styled";

export interface CountryInfoBoxProps {
  country_name?: string;
  country_code?: string;
  country_flag?: string;
  languages?: { name?: string | null }[];
}

export const CountryInfoBox = ({
  country_name,
  country_code,
  country_flag,
  languages,
}: CountryInfoBoxProps) => {
  return (
    <BoxWrapper>
      <BoxList>
        Information:
        <BoxItem>
          country name: <BoxItemInfo>{country_name}</BoxItemInfo>
        </BoxItem>
        <BoxItem>code: {country_code}</BoxItem>
        <BoxItem>
          flag: <BoxItemInfo>{country_flag}</BoxItemInfo>
        </BoxItem>
        {languages && (
          <BoxItem>
            <BoxList secondVariant>
              {languages.length > 1 ? "languages:" : "language:"}
              {languages.map((lang, index) => {
                return <BoxItem key={index}>{lang.name}</BoxItem>;
              })}
            </BoxList>
          </BoxItem>
        )}
      </BoxList>
    </BoxWrapper>
  );
};
