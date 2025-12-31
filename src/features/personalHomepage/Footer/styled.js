import styled from "styled-components";
import { ReactComponent as SocialIcon } from "../../../images/mark-github.svg";

export const FooterWrapper = styled.div`
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LetsTalk = styled.p`
  margin-top: 120px;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 120px;
    margin-bottom: 24px;
  }
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.textHeader};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  letter-spacing: 0.05em;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.textHeader};
  font-weight: 400;
  font-size: 18px;
  width: 670px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const SocialMediaIcon = styled(SocialIcon)`
  color: ${({ theme }) => theme.textHeader};
  width: 48px;
  height: 48px;
  margin-bottom: 109px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 32px;
    height: 32px;
    margin-bottom: 31px;
  }
`;
