import { Divider, Grid, Typography } from '@mui/material';
import MediaCard from '../components/media-card';
import NewsFlowMistrzem from '../public/images/news-flow-mistrzem.png'

export default function News() {
    return (
        <Grid container padding={3}>
            <Grid item xs={12} padding={2} textAlign="center">
                <Typography variant="h3" color="primary">
                    Aktualności
                </Typography>
                <Divider/>
            </Grid>

            <Grid container direction="row" justifyItems="left" justifyContent="left">
                {
                    [0, 1, 2, 3, 4, 5].map((i) => (
                        <Grid key={i} item xs={12} md={6} lg={4} padding={2}>
                            <MediaCard
                                header="Flow po raz trzeci mistrzem Polski!"
                                body="Three peat! Mamy to! Trzeci raz z rzędu wygrywamy nasze wymarzone Mistrzostwo Polski! Dodatkowo jeden z naszych Trenerów, Maciek Pająk, został wyróżniony jako MVP całego turnieju!"
                                imgSrc={NewsFlowMistrzem}
                                href="https://www.facebook.com/flow.ultimate.wroclaw/photos/a.829156457129230/4896777797033722/"
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}