import { Container, CountriesWrapper } from "@/components/Common.styled";
import { CountryTileProps } from "@/components/CountryTile/CountryTile";
import { GET_COUNTRIES_QUERY } from "@/utils/gql/queries";
import { InferGetStaticPropsType } from "next";
import { request } from "graphql-request";
import dynamic from "next/dynamic";
import { NavButton } from "@/components/NavButton/NavButton";

const CountryTile = dynamic<CountryTileProps>(
  () =>
    import("@/components/CountryTile/CountryTile").then(
      (mod) => mod.CountryTile
    ),
  {
    ssr: false,
  }
);

type CountriesProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Countries({ data }: CountriesProps) {
  return (
    <Container>
      <NavButton link="/" title="Homepage" />
      <h1>Countries:</h1>
      <CountriesWrapper>
        {data.countries.map((item, index) => {
          return (
            <CountryTile
              key={index}
              country_name={item.name}
              country_code={item.code}
              country_url={`/countries/${item.code.toLowerCase()}`}
            />
          );
        })}
      </CountriesWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await request(
    "https://countries.trevorblades.com/",
    GET_COUNTRIES_QUERY
  );
  return {
    props: { data },
  };
}
