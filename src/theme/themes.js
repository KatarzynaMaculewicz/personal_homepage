export const colors = {
  white: "#ffffff",
  iron: "#fbfbfeff",
  mercury: "#e5e5e5",
  slateGray: "#6E7E91",
  oxfordBlue: "#e5e5e572",
  mineShaft: "#252525",
  black: "#000000",

  dodgerBlue: "#2188FF",
  scienceBlue: "#0366D6",

  transparentGray: "#D1D5DA4D",
  transparentDarkGray: "#D1D5DA1A",
  mineShaftTransparent: "#363636B8",
  scienceBlueTransparent33: "#0366D633",
  scienceBlueTransparent80: "#0366D680"
};

export const shadows = {
  tileShadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3308",
};

export const breakpoints = {
  mobileSMax: 343,
  mobileMax: 767,
  tabletVerticalMax: 991,
  tabletHorizontalMax: 1199,
  desktopMax: 1366,
};

export const baseTheme = {
  breakpoints,
  tileShadow: shadows.tileShadow,
};

export const lightTheme = {
  ...baseTheme,

  background: colors.iron,
  text: colors.slateGray,
  textHeader: colors.mineShaft,
  repoName: colors.scienceBlue,
  textDecorationColor: colors.scienceBlueTransparent33,

  toggleBackground: colors.mercury,
  icon: colors.white,
  tileBackground: colors.white,
  tileBorder: colors.transparentGray,
  tileBorderHover: colors.scienceBlueTransparent33,
  link: colors.scienceBlue,
};

export const darkTheme = {
  ...baseTheme,
  
  background: colors.mineShaft,
  text: colors.white,
  textHeader: colors.white,
  repoName: colors.white,
  textDecorationColor: colors.scienceBlueTransparent33,

  toggleBackground: colors.oxfordBlue,
  icon: colors.black,
  tileBackground: colors.mineShaftTransparent,
  tileBorder: colors.transparentDarkGray,
  tileBorderHover: colors.scienceBlueTransparent80,
  link: colors.dodgerBlue,
  tileShadow: shadows.tileShadow,
};
