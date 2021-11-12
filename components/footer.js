import { Grid, List, Link, ListItem, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SocialsBarComponent from "./socials-bar";
import FlowLogo from '../public/images/flow.png';
import Image from 'next/image';
import NextLink from "next/link";
import { Box } from "@mui/system";
import { MenuElements } from "../types/menu-elements";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        padding: 40,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container padding={0} sx={{ mt: 5 }}>
            <Grid container direction="row" justifyItems="center" justifyContent="center" className={classes.gridContainer}>
                <Grid item xs={4} textAlign="left" spacing="0">
                    <Typography>
                        <List>
                            {MenuElements.map(element => (
                                <ListItem sx={{ paddingY: 0 }}>
                                    <NextLink href={element.href} passHref>
                                        <Link color="inherit" underline="always">{element.title}</Link>
                                    </NextLink>
                                </ListItem>
                            ))}
                            <ListItem>
                                <Link color="inherit" underline="hover" href="#">Do góry &uarr;</Link>
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign="center">
                    <Box sx={{ mt: -15 }}>
                        <Image src={FlowLogo} width="200" height="200" />
                    </Box>
                </Grid>
                <Grid item xs={4} textAlign="right">
                    <SocialsBarComponent />
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Klub Sportowy Flow Wrocław
                        </Typography>
                        <Typography variant="body2">
                            ul. Partyzantów 19/2
                        </Typography>
                        <Typography variant="body2">
                            51-672 Wrocław
                        </Typography>
                        <Link href="mailto:flowwroclaw@gmail.com" color="secondary">
                            <Typography variant="body2">flowwroclaw@gmail.com</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}