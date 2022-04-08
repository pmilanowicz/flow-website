import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
}));

export default function MainBar() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container direction="row" justifyItems="center" justifyContent="center" className={classes.gridContainer}>
        <Grid item xs={12} padding={4} textAlign="center">
          <Typography variant="h4" color="secondary">
            Rekrutujemy!
          </Typography>
          <Typography variant="h5" color="secondary">
            Zostań zawodnikiem lub zawodniczką Flow! <br/>
            Więcej informacji na wydarzeniu<br/><br />
            <Button size="small" variant="contained" color="secondary"
                    href="https://www.facebook.com/events/468306045087768/471653434753029" target="_blank">Kliknij i dołącz
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
