import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "components/searchBar/SearchBar";
import "./NavBar.scss";
import { useMediaQuery, useTheme } from "@mui/material";

function NavBar() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));
  const pages = [
    "Destinations",
    "Villas",
    "Experiences",
    "Guides",
    "About",
    "Journal",
    "Contact",
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="navbar" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {isExtraSmallSize && (
              <>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  disableScrollLock={true}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page, index) => (
                    <MenuItem key={index}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                </Box>
              </>
            )}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 2,
                display: "flex",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                alignSelf: "center",
              }}
            >
              LOGO
            </Typography>
            <Box>
              {!isExtraSmallSize &&
                pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Button>
                ))}
            </Box>
            <SearchBar />
            <Button className="loginBtn">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
