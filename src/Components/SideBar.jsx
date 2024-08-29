import { useState } from "react";
import { NavLink } from "react-router-dom";
import ReceiptIcon from '@mui/icons-material/Receipt';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Dashboard,
  Group,
  CalendarMonth,
  Inventory,
  BarChart,
  PieChart,
  StackedLineChart,
  Map,
  ShoppingCart,
  Menu,
  Settings,
} from "@mui/icons-material";

const menuItems = [
  { icon: <Dashboard />, text: "Overview", path: "/" },
  { icon: <Group />, text: "Users", path: "/users" },
  { icon: <Inventory />, text: "Products", path: "/products" },
  { icon: <ShoppingCart />, text: "Orders", path: "/orders" },
  { icon: <ReceiptIcon />, text: "Transactions", path: "/transactions" },
  { icon: <CalendarMonth />, text: "Schedule", path: "/schedule" },
  { icon: <StackedLineChart />, text: "Line Charts", path: "/line-charts" },
  { icon: <PieChart />, text: "Pie Charts", path: "/pie-charts" },
  { icon: <BarChart />, text: "Bar Charts", path: "/bar-charts" },
  { icon: <Map />, text: "Map", path: "/map" },
  { icon: <Settings />, text: "Settings", path: "/settings" },
];

function SideBar() {
  const [isOpen, setOpen] = useState(true);

  const handleToggle = () => setOpen(!isOpen);

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? 240 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? 240 : 60,
          boxSizing: "border-box",
          transition: "width 0.2s",
          background: "#2a263e",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: "0.1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isOpen ? "space-between" : "center",
            alignItems: "center",
            marginBottom: "0.7rem",
          }}
        >
          {isOpen && (
            <Typography
              sx={{
                fontFamily: "Montserrat",
              }}
              variant="body1"
              className="text-[#a7a5b8]"
            >
              ADMIN
            </Typography>
          )}
          <IconButton onClick={handleToggle}>
            <Menu
              sx={{
                color: "#a7a5b8",
              }}
              className=" hover:text-green-500 focus:text-green-500"
            />
          </IconButton>
        </Toolbar>

        <List
          sx={{
            "& > .MuiListItemButton-root": {
              mb: isOpen ? 0.5 : 1.5,
              paddingLeft: isOpen ? "4rem" : "",
            },
          }}
        >
          {menuItems.map((item, index) => (
          <NavLink
          key={index}
          to={item.path}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#22c55e" : "#a7a5b8",
          })}
        >
          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon
                sx={{
                  color: "#a7a5b8",
                }}
                className="text-[#a7a5b8] hover:text-green-500 focus:text-green-500"
              >
                {item.icon}
              </ListItemIcon>
              {isOpen && (
                <ListItemText
                  primary={item.text}
                  className="font-montserrat font-semibold text-[#a7a5b8] hover:text-green-500 focus:text-green-500"
                />
              )}
            </ListItem>
          </ListItemButton>
        </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
