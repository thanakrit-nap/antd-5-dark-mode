import themeZa from "../../styles/theme.module.scss";

const theme = (isDarkMode) => {
  const theme = isDarkMode ? "dark" : "light";
  return {
    token: {
      colorPrimary: themeZa[`primaryColor-${theme}`],
      colorTextBase: themeZa[`textColor-${theme}`],
      colorBgBase: themeZa[`backgroundColor-${theme}`]

      // colorTextBase: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
      // colorBgBase: isDarkMode
      //   ? darkTheme.backgroundColor
      //   : lightTheme.backgroundColor
    }
  };
};

export { theme };
