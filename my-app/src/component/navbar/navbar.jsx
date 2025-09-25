"use client";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SearchModal from "../searchModal/searchModal"; // Adjust path as needed
import Link from "next/link";
import { routesUrl } from "@/utils/pagesurl";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function SearchAppBar() {
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
    localStorage.setItem("themeMode", newTheme);
  };

  // Open search modal
  const handleSearch = () => {
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  // Handle item selection from the search modal
  const handleSearchSelect = (index, subIndex) => {
    localStorage.setItem("selectedIndex", index);
    localStorage.setItem(
      "selectedSubIndex",
      subIndex !== undefined ? subIndex : null
    );
  };

  // Create Material-UI theme
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const session = useSession();
  const pathname = usePathname();
  if (pathname === "/login" || session?.status === "authenticated") {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="bg-[#000000c9]">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Container
                sx={{ maxWidth: "1420px" }}
                maxWidth={false}
                className="flex justify-between"
              >
                {/* Group LOGO and Documentation */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginLeft: 7,
                  }}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography variant="h6" noWrap>
                      LOGO
                    </Typography>
                  </Link>
                  <Link
                    href={routesUrl.Login}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography variant="h6" className="navitems">
                      Documentation
                    </Typography>
                  </Link>
                </Box>

                {/* Icons (Search and Theme Toggle) */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginRight: 7,
                  }}
                >
                  <IconButton className="navitems" onClick={handleSearch}>
                    <SearchTwoToneIcon />
                  </IconButton>
                  <IconButton
                    className="navitems"
                    onClick={toggleTheme}
                    color="inherit"
                  >
                    {themeMode === "dark" ? (
                      <></>
                      // <ModeNightRoundedIcon />
                    ) : (
                      <></>
                      // <LightModeIcon />
                    )}
                  </IconButton>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </Box>
        <SearchModal
          modalOpen={modalOpen}
          handleClose={handleClose}
          onSearchSelect={handleSearchSelect}
        />
      </ThemeProvider>
    </>
  );
}
