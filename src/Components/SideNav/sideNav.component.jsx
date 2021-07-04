import React from "react";
import clsx from "clsx";
import {
  Avatar,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
} from "@material-ui/core";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "#6279fb",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  ProfileIcon: {
    width: "10rem",
    height: "10rem",
  },
  hide: {
    display: "none",
  },
  NavContent: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    margin: "10%",
    width: "80%",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#6279fb",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Heading: {
    fontSize: "1.2rem",
    fontFamily: "Montserrat",
    fontWeight: 500,
  },
}));

function SideNav() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography className={classes.Heading} noWrap>
            REMIND ME
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeft style={{ color: "white" }} />
            ) : (
              <ChevronRight />
            )}
          </IconButton>
        </div>
        <div className={classes.NavContent}>
          <Avatar
            src="https://fireship.io/img/pages/jeffdelaney-gde-2020.webp"
            alt="Profile"
            className={classes.ProfileIcon}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default SideNav;
