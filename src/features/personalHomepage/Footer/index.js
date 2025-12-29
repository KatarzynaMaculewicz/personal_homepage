import {
  FooterWrapper,
  LetsTalk,
  Email,
  FooterDescription,
  SocialMediaIcon,
} from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <LetsTalk>LET'S TALK</LetsTalk>
      <Email href="mailto:qla.katarzyna@gmail.com">
        qla.katarzyna@gmail.com
      </Email>
      <FooterDescription>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me.🤞
      </FooterDescription>
      <a
        href="https://github.com/KatarzynaMaculewicz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialMediaIcon />
      </a>
    </FooterWrapper>
  );
};
