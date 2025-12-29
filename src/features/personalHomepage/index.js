import { ThemeSwitch } from "../../common/ThemeSwitch/ThemeSwitch";
import { AboutPerson } from "./AboutPerson";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Container } from "./styled";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <AboutPerson />
    <Portfolio />
    <Footer />
  </Container>
);
