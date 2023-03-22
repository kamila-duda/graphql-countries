import { Container, FlexBox, HomeButton } from "@/components/Common.styled";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <FlexBox>
          <Link href="/countries" passHref legacyBehavior>
            <HomeButton>Countries</HomeButton>
          </Link>
          <Link href="/profile" passHref legacyBehavior>
            <HomeButton>Profile</HomeButton>
          </Link>
        </FlexBox>
      </Container>
    </>
  );
}
