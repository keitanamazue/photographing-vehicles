/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MailIcon from "@mui/icons-material/Mail";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { open } from "fs";
import router from "next/router";
import Link from "next/link";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [carTypeOpen, setCarTypeOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenCarType = () => {
    setCarTypeOpen(!carTypeOpen);
  };

  const navigateTakeCar = (path: string) => {
    router.push(path);
  };

  const cars = [
    { kind: "軽", path: "/take/light/normal/step1" },
    { kind: "軽ハイルーフ", path: "/take/light/highRoof/step1" },
    { kind: "軽SUV", path: "/take/light/suv/step1" },
    { kind: "軽バン・軽ワゴン", path: "/take/light/ban_wagon/step1" },
    { kind: "軽トラック", path: "/take/light/track/step1" },
    // "コンパクト",
    // "セダン",
    // "ミニバン",
    // "SUV",
    // "ステーションワゴン",
    // "ハッチバック",
  ];

  return (
    <div style={{ overflow: "scroll", position: "absolute", zIndex: 1000 }}>
      <input type="checkbox" id="drawer-checkbox" className="menu-checkbox" />
      <label htmlFor="drawer-checkbox" className="drawer-icon">
        <span></span>
      </label>

      <div className="drawer-menu">
        <ul className="drawer-menu-list">
          {cars.map((car, index) => {
            return (
              <li className="drawer-menu-item" key={index}>
                <Link href={car.path} className="drawer-menu-item-link">
                  {car.kind}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
