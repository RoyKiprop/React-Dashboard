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
  Avatar,
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
  { icon: <Dashboard />, text: "Dashboard" },
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
  const [isOpen, setOpen] = useState(false);

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
          transition: "width 1s",
          
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isOpen ? "space-between" : "center",
            alignItems: "center",
          }}
        >
          {isOpen && <Typography variant="body1">ADMIN</Typography>}
          <IconButton onClick={handleToggle}>
            <Menu />
          </IconButton>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: isOpen ? "flex-start" : "center",
            marginLeft: isOpen ? "4rem" : "0",
           
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="https://thispersondoesnotexist.com/"
            sx={{
              width: isOpen ? 70 : 30,
              height: isOpen ? 70 : 30,
            }}
          />
        </Box>
        {isOpen && (
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 400,
              marginLeft: "2rem",
              letterSpacing: "0.3rem",
            }}
          >
            Roy Kiprop
          </Typography>
        )}

        <List
          sx={{
            "& > .MuiListItemButton-root": {
              mb: isOpen ? 0.5 : 1.5,
              paddingLeft: isOpen ? "3rem" : "",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <ListItemButton key={index}>
              <ListItem disablePadding>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isOpen && <ListItemText primary={item.text} />}
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;