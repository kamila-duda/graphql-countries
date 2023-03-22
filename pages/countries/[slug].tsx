import { Container } from "@/components/Common.styled";
import { CountryInfoBox } from "@/components/CountryInfoBox/CountryInfoBox";
import { GET_COUNTRIES_QUERY, GET_COUNTRY_QUERY } from "@/utils/gql/queries";
import { NavButton } from "@/components/NavButton/NavButton";
import { request } from "graphql-request";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

type CodeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Code({ data }: CodeProps) {
  return (
    <Container>
      <NavButton link="/countries" title="All countries list" />
      <CountryInfoBox
        country_name={data?.country?.name}
        country_code={data?.country?.code}
        country_flag={data?.country?.emoji}
        languages={data?.country?.languages}
      />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countriesData = await request(
    "https://countries.trevorblades.com/",
    GET_COUNTRIES_QUERY
  );

  const paths = countriesData.countries.map((country) => ({
    params: { slug: country.code.toLowerCase() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const data = await request(
    "https://countries.trevorblades.com/",
    GET_COUNTRY_QUERY,
    { code: (params?.slug as string).toUpperCase() }
  );
  return {
    props: { data },
  };
};
