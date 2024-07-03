import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// =*= -IMPORT UI COMPONENT - =*= //
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState(
    localStorage.getItem("mode") ?? "light"
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // @ts-ignore
          mode,
        },
      }),
    [mode]
  );

  // START MATERIAL UI FUNCTIONS
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          setMode={setMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />

        <Box
          component="main"
          sx={{ flexGrow: 1, padding: "20px 10px", overflow: "hidden" }}
        >
          <DrawerHeader  />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
