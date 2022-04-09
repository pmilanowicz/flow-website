import { Button, Grid, Typography } from "@mui/material";

export default function MainBar() {
  return (
    <Grid container direction="row" justifyItems="center" justifyContent="center"  backgroundColor="#1e3356" marginTop={2} paddingY={1}>
      <Grid item xs={12} padding={4} textAlign="center">
        <Typography variant="h4" color="secondary">
          Rekrutujemy!
        </Typography>
        <Typography variant="h5" color="secondary">
          Zostań zawodnikiem lub zawodniczką Flow! <br />
          Więcej informacji na wydarzeniu<br /><br />
          <Button size="small" variant="contained" color="secondary"
            href="https://www.facebook.com/events/468306045087768/471653434753029" target="_blank">Kliknij i dołącz
          </Button>
        </Typography>
      </Grid>
    </Grid>
  )
}
