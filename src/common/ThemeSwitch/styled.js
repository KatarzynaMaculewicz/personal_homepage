import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../../images/sun.svg";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.text};
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;

export const ToggleTrack = styled.div`
  width: 48px;
  height: 26px;
  border: 0.75px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.toggleBackground};
  border-radius: 999px;
  padding: 3px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SunStyled = styled(SunIcon)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.text};
  --icon: ${({ theme }) => theme.icon};
  background: ${({ theme }) => theme.toggleCircle};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease-in-out;
  transform: translateX(0);

  ${({ isDark }) =>
    isDark &&
    css`
      transform: translateX(22px);
    `}
`;