import { useState } from "react";
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
  { icon: <Dashboard />, text: "Overview" },
  { icon: <Group />, text: "Users" },
  { icon: <Inventory />, text: "Products" },
  { icon: <ShoppingCart />, text: "Orders" },
  { icon: <CalendarMonth />, text: "Schedule" },
  { icon: <StackedLineChart />, text: "Line Charts" },
  { icon: <PieChart />, text: "Pie Charts" },
  { icon: <BarChart />, text: "Bar Charts" },
  { icon: <Map />, text: "Map" },
  { icon: <Settings />, text: "Settings" },
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
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%", marginTop: "0.1rem"}}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isOpen ? "space-between" : "center",
            alignItems: "center",
            marginBottom: "0.7rem"
          }}
        >
          {isOpen && (
            <Typography variant="body1" className="text-[#a7a5b8]">
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
              paddingLeft: isOpen ? "3rem" : "",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <ListItemButton key={index}
          
            >
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
                    className="text-[#a7a5b8] font-bold  hover:text-green-500 focus:text-green-500"
                  />
                )}
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
