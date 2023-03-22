import { BigFont, Container, FlexBox } from "@/components/Common.styled";
import { GET_COUNTRY_QUERY } from "@/utils/gql/queries";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { NavButton } from "@/components/NavButton/NavButton";

export default function Profile() {
  const {
    data: countryData,
    loading,
    error,
  } = useQuery(GET_COUNTRY_QUERY, { variables: { code: "PL" } });
  const [data, setData] = useState(countryData);

  useEffect(() => {
    setData(countryData);
  }, [countryData]);

  if (loading) return <FlexBox>Loading ...</FlexBox>;

  if (error) return `Error! ${error}`;

  return (
    <Container>
      <NavButton link="/" title="Homepage" />
      <h1>Your country:</h1>
      <Link
        href={`/countries/${data?.country?.code.toLowerCase()}`}
        passHref
        legacyBehavior
      >
        <BigFont as="a">{data?.country?.name}</BigFont>
      </Link>
    </Container>
  );
}
