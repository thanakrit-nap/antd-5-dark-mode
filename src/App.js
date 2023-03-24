import { useState } from "react";
import { ConfigProvider, theme, Button, Card, Typography } from "antd";
import Inputs from "./components/input";
import { theme as configTheme } from "./styles/antd/theme";
import styles from "./styles/global.module.scss";
import cx from "classnames";
import CustomComponent from "./components/custom";
import colorDiff from "color-difference";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const { Title } = Typography;

  console.log(colorDiff.compare("#000", "#000"));

  return (
    <ConfigProvider
      theme={{
        ...configTheme(isDarkMode),
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <div className={cx(styles[isDarkMode ? "dark" : "light"], styles["bg"])}>
        <Title>antd text</Title>
        <h1 className={styles["text-heading"]}>html text</h1>
        <CustomComponent />
        <Card style={{ width: "100vw", height: "fit-content" }}>
          <Button onClick={handleClick}>
            Change Theme to {isDarkMode ? "Light" : "Dark"}
          </Button>

          <Inputs />
        </Card>
      </div>
    </ConfigProvider>
  );
}

export default App;
