import MenuIcon from "@mui/icons-material/Menu";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { MenuElements } from "../types/menu-elements";

const drawerWidth = 300;

export default function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const renderMenuIcon = (component) => {
        const IconComponent = component;
        console.log(component)

        return <IconComponent fontSize="medium" color="primary" />;
    };

    console.log(MenuElements);
    return (
        <Box>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: 'white' },
                }}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)} sx={{ justifyContent: "flex-end" }}>
                        <ListItemIcon>
                            <IconButton size="large">
                                <CloseIcon />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>

                    <Divider />

                    {MenuElements.map(element => (
                        <ListItem button onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                                {renderMenuIcon(element.iconComponent)}
                            </ListItemIcon>
                            <Link href={element.href} passHref>
                                <ListItemText>{element.title}</ListItemText>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </Box>
    );
}