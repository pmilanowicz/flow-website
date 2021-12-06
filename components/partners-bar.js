import { Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import VrImage from '../public/images/vr.png';
import DlaStudentaImage from '../public/images/dlastudenta.png';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        backgroundColor: theme.palette.secondary.main,
        paddingTop: 30,
        paddingBottom: 30
    }
}));

export default function PartnersBar() {
    const classes = useStyles();

    return (
        <Grid container padding={3}>
            <Grid item xs={12} padding={2}>
                <Typography variant="h3" color="primary" textAlign="center">
                    Partnerzy
                </Typography>
                <Divider />
            </Grid>

            <Grid container direction="row" justifyItems="center" justifyContent="center" className={classes.gridContainer}>
                <Grid item xs={6} padding={2} textAlign="center">
                    <a href="http://www.vr-ultimate.com/" target="_blank">
                        <Image src={VrImage} width={139} height={139} />
                    </a>
                </Grid>
                <Grid item xs={6} padding={2} textAlign="center">
                    <a href="https://wroclaw.dlastudenta.pl/" target="_blank">
                        <Image src={DlaStudentaImage} height={139} />
                    </a>
                </Grid>
            </Grid>
        </Grid>
    )
}