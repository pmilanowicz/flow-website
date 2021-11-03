import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BookIcon from '@mui/icons-material/Book';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

const drawerWidth = 300;

export default function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

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

                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <BookIcon fontSize="medium" color="primary" />
                        </ListItemIcon>
                        <Link href="/o-nas" passHref>
                            <ListItemText>O nas</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <PeopleIcon fontSize="medium" color="primary" />
                        </ListItemIcon>
                        <Link href="/druzyna" passHref>
                            <ListItemText>Drużyna</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <BusinessCenterIcon fontSize="medium" color="primary" />
                        </ListItemIcon>
                        <Link href="/partnerzy" passHref>
                            <ListItemText>Partnerzy</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <AlternateEmailIcon fontSize="medium" color="primary" />
                        </ListItemIcon>
                        <Link href="/kontakt" passHref>
                            <ListItemText>Kontakt</ListItemText>
                        </Link>
                    </ListItem>
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