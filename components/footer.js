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
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginTop: -80
    },
    logoBox: {
        marginTop: -40,
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container padding={0} sx={{ mt: 5 }}>
            <Grid item xs={12} textAlign="center">
                <Box className={classes.logoBox}>
                    <Image src={FlowLogo} width="150" height="150" />
                </Box>
            </Grid>
            <Grid container direction="row" justifyItems="center" justifyContent="center" className={classes.gridContainer}>
                <Grid item xs={6} textAlign="left">
                    <List>
                        {MenuElements.map((element, index) => (
                            <ListItem key={index} sx={{ paddingY: 0, paddingX: 0 }}>
                                <NextLink href={element.href} passHref>
                                    <Link color="inherit" underline="always">
                                        <Typography>{element.title}</Typography>
                                    </Link>
                                </NextLink>
                            </ListItem>
                        ))}
                        <ListItem sx={{ marginTop: 2, paddingX: 0 }}>
                            <Link color="inherit" underline="always" href="#">
                                <Typography>Do góry &uarr;</Typography>
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} textAlign="right">
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
                        <Typography variant="body2">
                            <Link href="mailto:flowwroclaw@gmail.com" color="secondary">
                                flowwroclaw@gmail.com
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}