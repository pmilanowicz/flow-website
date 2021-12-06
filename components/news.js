import { Divider, Grid, Typography } from '@mui/material';
import MediaCard from '../components/media-card';
import NewsFlowMistrzem from '../public/images/news/news-flow-mistrz-polski-2021.jpeg';
import NewsFlowIgloo2021 from '../public/images/news/news-flow-igloo-2021.jpeg'
import NewsFlowEucf2021 from '../public/images/news/news-flow-eucf-2021.jpeg'

export default function News() {
    return (
        <Grid container padding={3}>
            <Grid item xs={12} padding={2} textAlign="center">
                <Typography variant="h3" color="primary">
                    Aktualności
                </Typography>
                <Divider />
            </Grid>

            {/* Image height/width ratio = 0,664893617021277 */}
            <Grid container direction="row" justifyItems="left" justifyContent="left">
                <Grid item xs={12} md={6} lg={4} padding={2}>
                    <MediaCard
                        header="Flow dziewczyny wygrywają Igloo! Chłopaki z 6 miejscem"
                        body="Flow Ptysie, czyli żeńska część Flow niepokonane w międzynarodowym turnieju pod balonem Igloo 2021! Chłopaki po ciękich bojach ostatecznie zajmują 6 miejsce."
                        imgSrc={NewsFlowIgloo2021}
                        href="https://www.facebook.com/flow.ultimate.wroclaw/photos/a.408994775812069/5127280837316749"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} padding={2}>
                    <MediaCard
                        header="Flow czwarte na Klubowych Mistrzostwach Europy"
                        body="Flow wyrównuje najlepszy wynik na arenie międzynarodowej w historii! Zajmujemy 4-te miejsce po ciękich bojach w deszczowej Bruggi"
                        imgSrc={NewsFlowEucf2021}
                        href="https://www.facebook.com/flow.ultimate.wroclaw/photos/a.408994775812069/4918525038192331"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} padding={2}>
                    <MediaCard
                        header="Flow trzeci raz z rzędu mistrzem Polski!"
                        body="Trzeci raz z rzędu Flow wygrywa wymarzone Mistrzostwo Polski! Dodatkowo jeden z naszych Trenerów, Maciek Pająk, został wyróżniony jako MVP całego turnieju!"
                        imgSrc={NewsFlowMistrzem}
                        href="https://www.facebook.com/flow.ultimate.wroclaw/photos/a.829156457129230/4896777797033722"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}