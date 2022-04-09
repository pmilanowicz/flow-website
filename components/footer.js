import { Grid, List, Link, ListItem, Typography } from "@mui/material";
import SocialsBarComponent from "./socials-bar";
import FlowLogo from '../public/images/flow.png';
import Image from 'next/image';
import NextLink from "next/link";
import { Box } from "@mui/system";
import { MenuElements } from "../types/menu-elements";
import { emailAddress } from "../types";

export default function Footer() {

    return (
        <Grid container padding={0}>
            <Grid item xs={12} textAlign="center" sx={{ mt: 5 }}>
                <Box sx={{ display: { sm: "none", md: "block" } }}>
                    <NextLink href="/">
                        <a>
                            <Image src={FlowLogo} width="150" height="150" />
                        </a>
                    </NextLink>
                </Box>
            </Grid>
            <Grid container direction="row" justifyItems="center" justifyContent="center" padding={2} color="white" backgroundColor="#1e3356" marginTop={{ sm: 0, md: "-80px" }}>
                <Grid item xs={6} textAlign="left" padding={2}>
                    <List>
                        {MenuElements.map((element, index) => (
                            <ListItem key={index} sx={{ paddingY: 0, paddingX: 0 }}>
                                <NextLink href={element.href} passHref>
                                    <Link color="inherit" underline="hover">
                                        <Typography>{element.title}</Typography>
                                    </Link>
                                </NextLink>
                            </ListItem>
                        ))}
                        <ListItem sx={{ marginTop: 2, paddingX: 0 }}>
                            <Link color="inherit" underline="hover" href="#">
                                <Typography>Do góry &uarr;</Typography>
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} textAlign="right" padding={2}>
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
                        <Typography variant="body2" noWrap>
                            <Link href={`mailto:${emailAddress}`} color="secondary">
                                {emailAddress}
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
