import { AppBar, Grid } from "@mui/material";
import Image from 'next/image';
import FlowLogo from '../public/images/flow.png';
import { Box } from "@mui/system";
import DrawerMenuComponent from "./drawer-menu";
import SocialsBar from "./socials-bar";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Grid container paddingX={2} paddingY={1}>
        <Grid item xs={5}>
          <DrawerMenuComponent />
        </Grid>
        <Grid item xs={2}>
          <Box textAlign="center">
            <Link href="/">
              <a>
                <Image src={FlowLogo} priority layout="fixed" width={50} height={50} />
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={5} textAlign="right">
          <SocialsBar />
        </Grid>
      </Grid>
    </AppBar>
  )
}
