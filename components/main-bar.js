import { Button, Grid, Typography } from "@mui/material";

export default function MainBar() {
  return (
    <Grid container direction="row" justifyItems="center" justifyContent="center"  backgroundColor="#1e3356" marginTop={2} paddingY={1}>
      <Grid item xs={12} padding={4} textAlign="center">
        <Typography variant="h1" color="secondary" fontSize={50}>
          Flow Wrocław - drużyna ultimate frisbee z Wrocławia
        </Typography>
        <Typography variant="h2" color="secondary" fontSize={25}>
          Wielokrotni Mistrzowie Polski w ultimate frisbee w kategorii Mixed.
          Zapraszamy do zapoznania się z informacjami o naszych zawodnikach, historii klubu oraz o prowadzonych rekrutacjach do zespołu.
        </Typography>
        {/*<Typography variant="h4" color="secondary">*/}
        {/*  Rekrutujemy!*/}
        {/*</Typography>*/}
        {/*<Typography variant="h5" color="secondary">*/}
        {/*  Zostań zawodnikiem lub zawodniczką Flow! <br />*/}
        {/*  Więcej informacji na wydarzeniu<br /><br />*/}
        {/*  <Button size="small" variant="contained" color="secondary"*/}
        {/*    href="https://www.facebook.com/events/629844088698230/629844122031560" target="_blank">Kliknij i dołącz*/}
        {/*  </Button>*/}
        {/*</Typography>*/}
      </Grid>
    </Grid>
  )
}
