import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../images/mark-github.svg";

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const GitHubIcon = styled(GithubIcon)`
  color: ${({ theme }) => theme.link};
  width: 40px;
`;

export const PortfolioHeader = styled.h2`
  color: ${({ theme }) => theme.textHeader};
  margin-top: 12px;
  margin-bottom: 0;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.05em;
`;

export const RecentProjects = styled.h3`
  color: ${({ theme }) => theme.textHeader};
  margin-top: 8px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
`;

export const ProjectsGrid = styled.div`
  max-width: 1216px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

