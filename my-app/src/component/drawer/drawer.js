"use client";
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchModal from "../searchModal/searchModal";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import { darkTheme, lightTheme, menuItems } from "../globalfile";
import SearchAppBar from "../navbar/navbar";

// Drawer width for the sidebar
const drawerWidth = 240;

// Styles for when the drawer is open
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// Styles for when the drawer is closed
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

// Header for the drawer
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Custom AppBar style
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

// Custom Drawer style
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
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

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedSubIndex, setSelectedSubIndex] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("themeMode", newTheme); // Persist theme choice
  };

  // Open search modal
  const handleSearch = () => {
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  // Toggle drawer open/close
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Handle item click (for both main menu and sub-items)
  const handleItemClick = (index, subIndex) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex !== undefined ? subIndex : null);

    // Save to localStorage
    localStorage.setItem("selectedIndex", index);
    localStorage.setItem(
      "selectedSubIndex",
      subIndex !== undefined ? subIndex : null
    );
  };

  // Get stored data from localStorage on mount
  useEffect(() => {
    const storedSelectedIndex = localStorage.getItem("selectedIndex");
    const storedSelectedSubIndex = localStorage.getItem("selectedSubIndex");

    if (storedSelectedIndex !== null) {
      setSelectedIndex(parseInt(storedSelectedIndex, 10));
    }
    if (storedSelectedSubIndex !== null) {
      setSelectedSubIndex(parseInt(storedSelectedSubIndex, 10));
    }
  }, []);

  // Toggle collapse of sub-items
  const toggleCollapse = (index) => {
    setOpenItems((prev) => {
      const updatedItems = prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index];
      // Save updated state to localStorage
      localStorage.setItem("openItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Handle item selection from the search modal
  const handleSearchSelect = (index, subIndex) => {
    setSelectedIndex(index);
    setSelectedSubIndex(subIndex !== undefined ? subIndex : null);
    // Save to localStorage
    localStorage.setItem("selectedIndex", index);
    localStorage.setItem(
      "selectedSubIndex",
      subIndex !== undefined ? subIndex : null
    );
  };

  // Get openItems state from localStorage
  useEffect(() => {
    const storedOpenItems = localStorage.getItem("openItems");
    if (storedOpenItems) {
      setOpenItems(JSON.parse(storedOpenItems));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <div className="flex justify-between items-center ">
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                  sx={{
                    marginRight: 3,
                    color: "#757575",
                  }}
                >
                  {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{ color: themeMode === "light" ? "black" : "white" }}
                >
                  LOGO
                </Typography>
              </div>
              <div className="flex justify-center items-center">
                <IconButton onClick={handleSearch}>
                  <SearchTwoToneIcon />
                </IconButton>
                <IconButton onClick={toggleTheme} color="inherit">
                  {themeMode === "light" ? (
                    <ModeNightRoundedIcon />
                  ) : (
                    <LightModeIcon />
                  )}
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader />
            <Divider />
            <List>
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.route ? (
                    <>
                      <Link href={item.route}>
                        <div key={index}>
                          <ListItem
                            disablePadding
                            onClick={() => toggleCollapse(index)}
                          >
                            <ListItemButton
                              selected={
                                selectedIndex === index &&
                                selectedSubIndex === null
                              }
                              onClick={() => handleItemClick(index)}
                              sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                backgroundColor:
                                  selectedIndex === index &&
                                  selectedSubIndex === null
                                    ? theme.palette.action.selected
                                    : "transparent",
                                "&:hover": {
                                  backgroundColor: theme.palette.action.hover,
                                },
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : "auto",
                                  justifyContent: "center",
                                  color:
                                    (selectedIndex === index &&
                                      selectedSubIndex !== null) ||
                                    (selectedIndex === index &&
                                      selectedSubIndex === null)
                                      ? "inherit"
                                      : theme.palette.main,
                                }}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={item.title}
                                sx={{ opacity: open ? 1 : 0 }}
                              />
                              {item.subItems &&
                                open &&
                                (openItems.includes(index) ? (
                                  <ExpandMore />
                                ) : (
                                  <ChevronLeftIcon />
                                ))}
                            </ListItemButton>
                          </ListItem>
                        </div>
                      </Link>
                    </>
                  ) : (
                    <div key={index}>
                      <ListItem
                        disablePadding
                        onClick={() => toggleCollapse(index)}
                      >
                        <ListItemButton
                          selected={
                            selectedIndex === index && selectedSubIndex === null
                          }
                          onClick={() => handleItemClick(index)}
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            backgroundColor:
                              selectedIndex === index &&
                              selectedSubIndex === null
                                ? theme.palette.action.selected
                                : "transparent",
                            "&:hover": {
                              backgroundColor: theme.palette.action.hover,
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              color:
                                (selectedIndex === index &&
                                  selectedSubIndex !== null) ||
                                (selectedIndex === index &&
                                  selectedSubIndex === null)
                                  ? "inherit"
                                  : theme.palette.main,
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                          {item.subItems &&
                            open &&
                            (openItems.includes(index) ? (
                              <ExpandMore />
                            ) : (
                              <ChevronLeftIcon />
                            ))}
                        </ListItemButton>
                      </ListItem>

                      {/* Subitems */}
                      {item.subItems && (
                        <Collapse
                          in={openItems.includes(index)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {item.subItems.map((subItem, subIndex) => (
                              <Link href={subItem.route} key={subIndex}>
                                <ListItemButton
                                  selected={
                                    selectedIndex === index &&
                                    selectedSubIndex === subIndex
                                  }
                                  onClick={() =>
                                    handleItemClick(index, subIndex)
                                  }
                                  sx={{
                                    pl: open ? 6 : 4,
                                    backgroundColor:
                                      selectedIndex === index &&
                                      selectedSubIndex === subIndex
                                        ? theme.palette.action.selected
                                        : "transparent",
                                    "&:hover": {
                                      backgroundColor:
                                        theme.palette.action.hover,
                                    },
                                  }}
                                >
                                  <ListItemIcon
                                    sx={{
                                      minWidth: 0,
                                      mr: open ? 3 : "auto",
                                      justifyContent: "center",
                                      color:
                                        selectedIndex === index &&
                                        selectedSubIndex === subIndex
                                          ? "inherit"
                                          : theme.palette.main,
                                    }}
                                  >
                                    {subItem.icon}
                                  </ListItemIcon>
                                  <ListItemText primary={subItem.title} />
                                </ListItemButton>
                              </Link>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              bgcolor: themeMode === "light" ? "#f4f6f8" : "#121212",
              flexGrow: 1,
              p: 3,
            }}
          >
            {children}
          </Box>
        </Box>
        <SearchModal open={modalOpen} handleClose={handleClose} />
      </ThemeProvider>
      <SearchModal
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        onSearchSelect={handleSearchSelect}
      />
    </>
  );
}
