import styled from "styled-components";
import { ReactComponent as MailSvg } from "../../../images/Message.svg";

export const AboutPersonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 48px
  }
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 384px;
  height: 384px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 50vw;
    height: 50vw;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ThisIs = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.textHeader};
  letter-spacing: 0.05em;
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const About = styled.p`
  letter-spacing: 5%;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const MailIcon = styled(MailSvg)`
  width: 24px;
  height: 24px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;
