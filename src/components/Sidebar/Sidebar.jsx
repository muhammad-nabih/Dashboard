import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ handleDrawerClose, open }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const activeLink = (pathItem) => {
    return pathname === pathItem
      ? theme.palette.mode === "dark"
        ? grey[800]
        : grey[300]
      : "transparent";
  };

  const menuItems1 = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/dashboard" },
    { text: "Manage Team", icon: <GroupOutlinedIcon />, path: "/manage-team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/contacts-information",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices-balances",
    },
  ];

  const menuItems2 = [
    {
      text: "Profile Form",
      icon: <PersonOutlinedIcon />,
      path: "/profile-form",
    },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/calendar",
    },
    { text: "FAQ Page", icon: <HelpOutlinedIcon />, path: "/faq" },
  ];

  const menuItems3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar-chart" },
    { text: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/pie-chart" },
    {
      text: "Line Chart",
      icon: <ShowChartOutlinedIcon />,
      path: "/line-chart",
    },
    {
      text: "Geography Chart",
      icon: <LegendToggleOutlinedIcon />,
      path: "/geography-chart",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Avatar
            alt="Mohamed Nabih"
            src="/mohamed.png"
            sx={{
              width: open ? 66 : 30,
              height: open ? 66 : 30,
              transition: ".3s",
              border: "3px solid #1976d2",
            }}
          />
          <Typography
            variant="body1"
            sx={{ display: open ? "block " : "none", transition: ".3s" }}
            fontWeight={"bold"}
          >
            {" "}
            Mohamed Nabih
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: open ? "block " : "none", transition: ".3s" }}
            color={theme.palette.info.main}
            fontWeight={"bold"}
          >
            {" "}
            Admin
          </Typography>
        </Stack>
        <Divider />
        <List>
          {menuItems1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: activeLink(item.path),
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: activeLink(item.path),
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: activeLink(item.path),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
