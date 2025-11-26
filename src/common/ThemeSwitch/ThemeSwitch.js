import { useDispatch, useSelector } from "react-redux";
import { selectIsDark, toggleTheme } from "./themeSlice";
import { Button, Label, ToggleTrack, Wrapper, SunStyled } from "./styled";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDark);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Label>DARK MODE {isDark ? "ON" : "OFF"}</Label>
        <ToggleTrack>
            <SunStyled isDark={isDark}/>
        </ToggleTrack>
      </Button>
    </Wrapper>
  );
};
