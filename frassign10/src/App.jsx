import Appbar from "./components/Appbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showSidebarAndRightbar = windowWidth >= 900;

  return (
    <Grid container direction="column" display="flex" flexDirection="column">
      <Appbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box width={"100%"} display="flex" maxWidth={"700px"}>
          {showSidebarAndRightbar && <Sidebar />}
          <Content />
          {showSidebarAndRightbar && <Rightbar />}
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
