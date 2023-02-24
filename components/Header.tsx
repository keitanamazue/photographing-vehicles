/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box } from "@mui/system";
import Image from "next/image";

export const Header = () => {
  const [carTypeOpen, setCarTypeOpen] = React.useState(false);

  const useToggle = (initialValue = false) => {
    const [state, setState] = React.useState(initialValue);

    const toggle = React.useCallback(() => {
      setState((prevState) => !prevState);
    }, []);

    return [state, toggle] as const;
  };

  const [state, toggle] = useToggle();

  const cars = [
    { kind: "軽", path: "/take/light/normal/step/1" },
    { kind: "軽ハイルーフ", path: "/take/light/highRoof/step/1" },
    { kind: "軽SUV", path: "/take/light/suv/step/1" },
    { kind: "軽バン・軽ワゴン", path: "/take/light/ban_wagon/step/1" },
    { kind: "軽トラック", path: "/take/light/track/step/1" },
    // "コンパクト",
    // "セダン",
    // "ミニバン",
    // "SUV",
    // "ステーションワゴン",
    // "ハッチバック",
  ];

  return (
    <div style={{ position: "absolute", zIndex: 1000 }}>
      <input type="checkbox" id="drawer-checkbox" className="menu-checkbox" />
      <label htmlFor="drawer-checkbox" className="drawer-icon">
        <span></span>
      </label>

      <div className="drawer-menu">
        <ul className="drawer-menu-list">
          <ListItemButton
            onClick={toggle}
            style={{
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
            }}
          >
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="車種選択" />
            {state ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Box mt={6}>
            {state &&
              cars.map((car, index) => {
                return (
                  <li className="drawer-menu-item" key={index}>
                    <Link href={car.path} className="drawer-menu-item-link">
                      {car.kind}
                    </Link>
                  </li>
                );
              })}
          </Box>
        </ul>
      </div>
    </div>
  );
};
