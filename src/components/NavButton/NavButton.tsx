import Link from "next/link";
import { StyledLink } from "./NavButton.styled";

interface NavButtonProps {
  link: string;
  title: string;
}

export const NavButton = ({ link, title }: NavButtonProps) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <StyledLink>← {title}</StyledLink>
    </Link>
  );
};
